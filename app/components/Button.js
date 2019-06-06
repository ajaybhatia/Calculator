import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Button = ({ value, bgColor, color, onPress }) => {
  if (onPress) {
    return (
      <TouchableNativeFeedback onPress={() => onPress(value)}>
        <View
          style={[
            styles.button,
            bgColor ? { backgroundColor: bgColor } : { backgroundColor: "#fff" }
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              color ? { color: color } : { color: "#999" }
            ]}
          >
            {value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableNativeFeedback>
        <View
          style={[
            styles.button,
            bgColor ? { backgroundColor: bgColor } : { backgroundColor: "#fff" }
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              color ? { color: color } : { color: "#999" }
            ]}
          >
            {value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    margin: 1,
    width: width / 4,
    height: height / 7.3,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 34
  }
});

export default Button;
