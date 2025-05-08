import { View, Text, StyleSheet } from "react-native";

export default function SecondScreen() {
  return (
    <View>
      <Text style={styles.text}>Second</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 70
  },
});
