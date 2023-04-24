import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../redux/store/hooks";

interface ITurnProps {
  timer: number;
}

const Turn: React.FunctionComponent<ITurnProps> = ({ timer }) => {
  const { turn } = useAppSelector((state) => state.game);
  return (
    <View style={styles.turn}>
      {turn === 1 ? (
        <Text style={styles.turnText}>{timer}</Text>
      ) : (
        <Text style={styles.turnText}>Your turn</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  turn: {
    padding: 25,
    width: "100%",
    marginBottom: 20,
  },
  turnText: {
    fontSize: 30,
    color: "#7a7a7a",
    textAlign: "center",
  },
});

export default Turn;
