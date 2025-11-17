import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getTileSize } from "../utils/tileSize";
import StyledText from "./StyledText";

export default function Tile(props) {
  const { onPress, style, colour, shadowColour, text, icon } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        { backgroundColor: colour, boxShadow: `2px 4px 4px ${shadowColour}` },
      ]}
    >
      <Text>{icon}</Text>
      <StyledText style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        {text}
      </StyledText>
    </TouchableOpacity>
  );
}

// Calculate tile spacing depending on screen size
const tileSize = getTileSize();

const styles = StyleSheet.create({
  container: {
    width: tileSize,
    height: tileSize,
    margin: 6,
    padding: 8,
    backgroundColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: 600,
    marginTop: 8,
  },
});
