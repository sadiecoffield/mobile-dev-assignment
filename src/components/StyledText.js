import { StyleSheet, Text } from "react-native";

export default function StyledText({ style, ...props }) {
  return <Text {...props} style={[styles.text, style]} />;
}

const styles = StyleSheet.create({
  text: {
    color: "#535252ff",
    fontSize: 24,
  },
});
