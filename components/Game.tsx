import React, { useEffect, useState } from "react";
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
import { click, computerPlay, reset } from "../redux/slices/gameSlice";
import Turn from "./Turn";
import Start from "./Start";

interface IGameProps {}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  const dispatch = useAppDispatch();
  const { board, turn } = useAppSelector((state) => state.game);
  const winner = calculateWinner(board);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 3 && turn === 1) {
        setCount((curCount) => curCount + 1);
      }
      if (count >= 3 && turn === 1) {
        dispatch(computerPlay({ index: 0, winner }));
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, turn]);

  const handleClick = (index: number) => {
    dispatch(click({ index, winner }));
    setCount(0);
  };
  const handleResetGame = () => {
    dispatch(reset());
  };

  return (
    <SafeAreaView style={styles.container}>
      {!winner && <Turn timer={count} />}
      <Board cells={board} onPress={handleClick} />
      <View style={styles.gameWinner}>
        <Text style={styles.winnerText}>
          {winner && (turn === 0 ? `Computer wins!` : "You win!")}
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
    position: "relative",
  },
  gameWinner: {
    padding: 25,
    width: "100%",
  },
  winnerText: {
    fontSize: 30,
    color: "#f62682",
    textAlign: "center",
  },
  gameReset: {
    width: "100%",
    padding: 25,
  },
  resetText: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#6a5af9",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Game;
