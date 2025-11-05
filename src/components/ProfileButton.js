import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";

export default function ProfileButton(props) {
  const { profileName, currentProfile, onSelect } = props;

  // Determine if this profile button is currently selected
  const isSelected = profileName === currentProfile;

  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={styles.profileName}
        onPress={() => onSelect(profileName)}
      >
        <FontAwesome
          style={styles.icon}
          name="circle"
          size={20}
          color={isSelected ? "#f2a500ff" : "#535252ff"}
        />
        <StyledText style={isSelected ? { fontWeight: 600 } : ""}>
          {profileName}
        </StyledText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="trash" size={24} color="#f15bb5" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  profileName: {
    flexDirection: "row",
    alignItems: "center",
  },
});
