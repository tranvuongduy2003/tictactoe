import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IStartProps {
  onPress: () => void;
}

const Start: React.FunctionComponent<IStartProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  },
  overlay: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    opacity: 0.6,
  },
  buttonText: {
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#b94793",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Start;
