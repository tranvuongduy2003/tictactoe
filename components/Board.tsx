import React from "react";
import Cell from "./Cell";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface IBoardProps {
  cells: string[];
  onPress: () => void;
}

const { width, height } = Dimensions.get("screen");

const Board: React.FunctionComponent<IBoardProps> = ({ cells, onPress }) => {
  return (
    <View style={styles.gameBoard}>
      <FlatList
        data={cells}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={onPress}
            style={{ flex: 1, height: (width - 50) / 3 }}
          >
            <Cell
              value={item}
              onPress={() => onPress(index)}
              isX={item === "X"}
              isO={item === "O"}
            ></Cell>
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gameBoard: {
    width: width - 50,
    height: width - 50,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
});

export default Board;
