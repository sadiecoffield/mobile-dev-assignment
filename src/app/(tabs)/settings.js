import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Modal,
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

export default function Tab() {
  const router = useRouter();

  const [currentProfile, setCurrentProfile] = useState("Default");
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

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

  function handleAdd() {
    setAttemptedSubmit(true);

    // Alert user if input field isn't filled
    if (!text.trim()) {
      alert("Please fill in all fields");
      return;
    }

    // return to settings page, add profile to list etc.

    setModalVisible(false); // Return to settings page
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
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
              />
            </View>
            <TouchableOpacity
              onPress={() => handleAdd()}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fbfbfbff",
    boxShadow: "0px 2px 6px 2px #dcdcdcff",
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
