import { StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

export default function ButtonWithIcon(props) {
  const { icon, text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon && <StyledText style={styles.icon}>{icon}</StyledText>}
      <StyledText>{text}</StyledText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    backgroundColor: "#f4f4f4ff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
});
