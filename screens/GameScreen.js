import { Text, View, StyleSheet } from "react-native";

import Title from "../components/title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponent's Guess</Title>
        <Text>Higher or Lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
});
