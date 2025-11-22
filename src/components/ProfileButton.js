import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useProfiles } from "../contexts/ProfilesProvider";
import StyledText from "./StyledText";

export default function ProfileButton(props) {
  const { profile, selectProfile, deleteProfile } = props;
  const { currentProfile } = useProfiles();

  // Determine if this profile button is currently selected
  const isSelected = profile.id === currentProfile.id;

  return (
    <View
      style={
        isSelected
          ? [styles.button, { backgroundColor: "#e2e2e2ff" }]
          : styles.button
      }
    >
      <TouchableOpacity
        style={styles.profileName}
        onPress={() => selectProfile(profile)}
      >
        <FontAwesome
          style={styles.icon}
          name="circle"
          size={20}
          color={isSelected ? "#f2a500ff" : "#d4d4d4ff"}
        />
        <StyledText style={isSelected ? { fontWeight: 600 } : ""}>
          {profile.name}
        </StyledText>
      </TouchableOpacity>
      {
        // Don't add delete button to "Default" profile
        profile.name !== "Default" && (
          <TouchableOpacity onPress={() => deleteProfile(profile.id)}>
            <Ionicons name="trash" size={26} color="#f15bb5" />
          </TouchableOpacity>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#f3f3f3ff",
  },
  icon: {
    marginRight: 10,
  },
  profileName: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});
