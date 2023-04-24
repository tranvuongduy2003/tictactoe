import React from "react";
import { calculateWinner } from "../helpers/calculateWinner";
import Board from "./Board";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { click, reset } from "../redux/slices/gameSlice";

interface IGameProps {}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  const dispatch = useAppDispatch();
  const { board, xIsNext } = useAppSelector((state) => state.game);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    dispatch(click({ index, winner }));
  };
  const handleResetGame = () => {
    dispatch(reset());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Board cells={board} onPress={handleClick}></Board>
      <View style={styles.gameWinner}>
        <Text style={styles.winnerText}>
          {winner ? `Winner is ${winner}` : ""}
        </Text>
      </View>
      <TouchableOpacity style={styles.gameReset} onPress={handleResetGame}>
        <Text style={styles.resetText}>Reset game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  gameWinner: {
    padding: 25,
    width: "100%",
  },
  winnerText: {
    fontSize: 30,
    color: "#f62682",
  },
  gameReset: {
    width: "100%",
    padding: 25,
    borderRadius: 5,
  },
  resetText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#6a5af9",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Game;
