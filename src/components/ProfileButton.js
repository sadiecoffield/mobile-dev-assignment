import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";

export default function ProfileButton(props) {
  const { profileName } = props;

  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.profileName}>
        <FontAwesome
          style={styles.icon}
          name="circle"
          size={18}
          color="#f2a500ff"
        />
        <StyledText>{profileName}</StyledText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="trash" size={32} color="#f15bb5" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  profileName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
