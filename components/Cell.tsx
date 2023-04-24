import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ICellProps {
  value: string;
  onPress: () => void;
  isX: boolean;
  isO: boolean;
}

const { width } = Dimensions.get("screen");

const Cell: React.FunctionComponent<ICellProps> = ({
  value,
  onPress,
  isX,
  isO,
}) => {
  return (
    <TouchableOpacity style={styles.gameCell} onPress={onPress}>
      <Text style={[styles.cellText, isO && styles.isO, isX && styles.isX]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameCell: {
    flex: 1,
    borderWidth: 1,
    height: (width - 50) / 3,
    borderColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontWeight: "bold",
    fontSize: (width - 50) / 5,
  },
  isX: {
    color: "#2cccff",
  },
  isO: {
    color: "#ff6651",
  },
});

export default Cell;
