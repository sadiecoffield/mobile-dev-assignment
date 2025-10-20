import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsButton from "../../components/SettingsButton";
import StyledText from "../../components/StyledText";

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>Settings</StyledText>
      <View style={styles.optionsContainer}>
        <StyledText style={styles.subheading}>Manage Tiles</StyledText>
        <SettingsButton
          icon={<Ionicons name="add-circle" size={32} color="#52b69a" />}
          text="Add new tile"
        />
        <SettingsButton
          icon={<Ionicons name="remove-circle" size={32} color="#f15bb5" />}
          text="Remove tile"
        />
        <StyledText style={styles.subheading}>Manage Profiles</StyledText>
        <SettingsButton text="Profile 1" />
        <SettingsButton text="Profile 2" />
        <SettingsButton text="Profile 3" />
        <SettingsButton
          icon={<Ionicons name="person-add" size={32} color="#52b69a" />}
          text="Add new profile"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 36,
    fontWeight: 700,
    marginTop: 100,
  },
  subheading: {
    fontWeight: 600,
    marginTop: 40,
  },
  optionsContainer: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
});
