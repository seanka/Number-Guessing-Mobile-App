import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children }) {
  <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
