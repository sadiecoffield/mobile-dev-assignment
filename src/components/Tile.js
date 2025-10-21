import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Tile(props) {
  const { text, icon } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{icon}</Text>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "blue",
  },
});
