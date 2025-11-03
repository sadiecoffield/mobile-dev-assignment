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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  icon: {
    marginRight: 10,
  },
});
