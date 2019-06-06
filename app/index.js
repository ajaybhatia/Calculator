import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Display from "./components/Display";
import Button from "./components/Button";

class App extends Component {
  state = {
    value: ""
  };

  setValue = newValue => {
    const { value } = this.state;

    if (value.length < 15) this.setState({ value: value + newValue });
  };

  clear = () => this.setState({ value: "" });

  render() {
    const { value } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar animated translucent barStyle="light-content" />
        <Display value={value} />
        <View style={styles.row}>
          <Button value="C" onPress={this.clear} />
          <Button value="()" />
          <Button value={"\u0025"} />
          <Button value={"\u00F7"} />
        </View>
        <View style={styles.row}>
          <Button value="7" onPress={this.setValue} />
          <Button value="8" onPress={this.setValue} />
          <Button value="9" onPress={this.setValue} />
          <Button value={"\u00d7"} />
        </View>
        <View style={styles.row}>
          <Button value="4" onPress={this.setValue} />
          <Button value="5" onPress={this.setValue} />
          <Button value="6" onPress={this.setValue} />
          <Button value={"\u2212"} />
        </View>
        <View style={styles.row}>
          <Button value="1" onPress={this.setValue} />
          <Button value="2" onPress={this.setValue} />
          <Button value="3" onPress={this.setValue} />
          <Button value={"\u002B"} />
        </View>
        <View style={styles.row}>
          <Button value={"\u00b1"} />
          <Button value="0" onPress={this.setValue} />
          <Button value="." />
          <Button value={"\u003d"} bgColor="#6c90cc" color="#fff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d5d5"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default App;
