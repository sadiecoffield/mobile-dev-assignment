import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import ProfileButton from "../../components/ProfileButton";
import StyledText from "../../components/StyledText";

export default function Tab() {
  const router = useRouter();

  const [currentProfile, setCurrentProfile] = useState("Default");

  const profiles = [
    "Default",
    "Sam",
    "Alex",
    "Sophie",
    "John",
    "Katie",
    "James",
    "Lewis",
    "Amy",
    "Olivia",
    "Lauren",
  ];

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
            onPress={() => router.navigate("/removeTile")}
          />
        </View>
        <ButtonWithIcon
          icon={<Ionicons name="person-add" size={32} color="#9b5de5" />}
          text="Add new profile"
        />
        <FlatList
          data={profiles}
          renderItem={({ item }) => {
            return (
              <ProfileButton
                key={item}
                profileName={item}
                currentProfile={currentProfile}
                onSelect={setCurrentProfile}
              />
            );
          }}
          contentContainerStyle={{ paddingTop: 10 }}
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
  optionsContainer: {
    flex: 1,
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
