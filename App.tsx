import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Game from "./components/Game";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
