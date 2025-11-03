import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import StyledText from "../../components/StyledText";

export default function Tab() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>Settings</StyledText>
      <View style={styles.optionsContainer}>
        <View style={styles.tileSettings}>
          <ButtonWithIcon
            icon={<Ionicons name="add-circle" size={32} color="#52b69a" />}
            text="Add new tile"
            onPress={() => router.navigate("/addTile")}
          />
          <ButtonWithIcon
            icon={<Ionicons name="remove-circle" size={32} color="#9b5de5" />}
            text="Remove tile"
          />
        </View>
        <ButtonWithIcon
          icon={<Ionicons name="person-add" size={32} color="#9b5de5" />}
          text="Add new profile"
        />
        <TouchableOpacity style={styles.profileButton}>
          <StyledText>Default</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <StyledText>Sam</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <StyledText>Alex</StyledText>
        </TouchableOpacity>
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
  optionsContainer: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: 40,
  },
  tileSettings: {
    width: "100%",
    borderColor: "#535252ff",
    borderBottomWidth: 1,
    paddingBottom: 24,
  },
  profileButton: {
    paddingLeft: 15,
    marginTop: 24,
  },
});
