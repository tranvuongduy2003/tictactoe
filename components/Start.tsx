import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IStartProps {
  onPress: () => void;
}

const Start: React.FunctionComponent<IStartProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  button: {
    alignSelf: "center",
  },
  buttonText: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#6a5af9",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Start;
