import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import StyledText from "../../components/StyledText";

export default function Tab() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>Settings</StyledText>
      <View style={styles.optionsContainer}>
        <StyledText style={styles.subheading}>Manage Tiles</StyledText>
        <ButtonWithIcon
          icon={<Ionicons name="add-circle" size={32} color="#52b69a" />}
          text="Add new tile"
          onPress={() => router.navigate("/addTile")}
        />
        <ButtonWithIcon
          icon={<Ionicons name="remove-circle" size={32} color="#f15bb5" />}
          text="Remove tile"
        />
        <StyledText style={styles.subheading}>Manage Profiles</StyledText>
        <ButtonWithIcon text="Profile 1" />
        <ButtonWithIcon text="Profile 2" />
        <ButtonWithIcon text="Profile 3" />
        <ButtonWithIcon
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
