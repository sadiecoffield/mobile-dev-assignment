import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

export default function Tile(props) {
  const { colour, text, icon } = props;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: colour }]}>
      <Text>{icon}</Text>
      <StyledText style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        {text}
      </StyledText>
    </TouchableOpacity>
  );
}

const screenWidth = Dimensions.get("window").width;
const numOfColumns = 3;
const tileSize = (screenWidth - 60) / numOfColumns;

const styles = StyleSheet.create({
  container: {
    width: tileSize,
    height: tileSize,
    margin: 5,
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
