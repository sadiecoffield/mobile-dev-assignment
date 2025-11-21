import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import ProfileButton from "../../components/ProfileButton";
import StyledText from "../../components/StyledText";
import { useProfiles } from "../../contexts/ProfilesProvider";
import { createProfile } from "../../models/profile";

export default function Tab() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const { profilesData, setProfilesData, currentProfile, setCurrentProfile } =
    useProfiles();

  function handleAddProfile() {
    setAttemptedSubmit(true);

    // Alert user if input field isn't filled
    if (!text.trim()) {
      Alert.alert("No Name Provided", "Enter a name for the profile", [
        { text: "OK" },
      ]);
      return;
    }

    // Create new profile object
    const newProfileObj = createProfile({
      name: text,
      customTiles: [],
    });

    // Add new profile to array
    setProfilesData((prev) => [...prev, newProfileObj]);

    onChangeText(""); // Clear input field
    setAttemptedSubmit(false); // Stop error styles when modal next loads
    setModalVisible(false);
  }

  function handleDeleteProfile(profileId) {
    // Confirm the user wants to delete the profile
    Alert.alert("Delete Profile?", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setProfilesData((prev) =>
            prev.filter((profile) => profile.id !== profileId)
          );
        },
      },
    ]);

    if (currentProfile.id === profileId) {
      setCurrentProfile(profilesData[0]);
    }
  }

  function handleSelectProfile(profile) {
    setCurrentProfile(profile);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setModalVisible(false)}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ width: "100%", alignItems: "center" }}
          >
            <Pressable style={styles.modalContainer} onPress={() => {}}>
              <View style={styles.inputContainer}>
                <StyledText style={styles.subheading}>
                  Enter Profile Name
                </StyledText>
                <TextInput
                  style={[
                    styles.input,
                    !text.trim() && attemptedSubmit ? styles.errorInput : null,
                  ]}
                  onChangeText={onChangeText}
                  value={text}
                  maxLength={15}
                  autoCorrect={false}
                  autoFocus={true}
                />
              </View>
              <TouchableOpacity
                onPress={() => handleAddProfile()}
                style={styles.addButton}
              >
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </Pressable>
          </KeyboardAvoidingView>
        </Pressable>
      </Modal>
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
          onPress={() => setModalVisible(true)}
          icon={<Ionicons name="person-add" size={32} color="#9b5de5" />}
          text="Add new profile"
        />
        <FlatList
          data={profilesData || []}
          renderItem={({ item }) => {
            return (
              <ProfileButton
                profile={item}
                selectProfile={handleSelectProfile}
                deleteProfile={handleDeleteProfile}
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
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 250,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px 2px #6f6f6fff",
    borderRadius: 10,
    alignItems: "center",
    textAlign: "left",
    padding: 35,
  },
  inputContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 8,
    fontSize: 24,
    padding: 10,
    marginTop: 10,
    color: "#535252ff",
    boxShadow: "0px 2px 6px 2px #dcdcdcff",
  },
  errorInput: {
    boxShadow: "0px 0px 4px 2px #ee4e4eff",
  },
  addButton: {
    width: 128,
    backgroundColor: "#9b5de5",
    padding: 10,
    marginTop: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "2px 4px 4px #623b91ff",
  },
  addButtonText: {
    fontSize: 24,
    color: "white",
    fontWeight: 600,
  },
  subheading: {
    fontWeight: 600,
  },
});
