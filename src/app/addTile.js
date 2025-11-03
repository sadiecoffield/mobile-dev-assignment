import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../components/ButtonWithIcon";
import StyledText from "../components/StyledText";

export default function AddTileScreen() {
  const router = useRouter();
  const [text, onChangeText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const categories = [
    { label: "Feelings", value: "feelings" },
    { label: "Needs", value: "needs" },
    { label: "People", value: "people" },
    { label: "Things", value: "things" },
  ];

  function handleAdd() {
    setAttemptedSubmit(true);

    // Alert user if input fields aren't filled
    if (!text.trim() || !selectedCategory) {
      alert("Please fill in all fields");
      return;
    }

    // return to settings page, add tile to category etc.
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={40} color="#535252ff" />
          </TouchableOpacity>
          <StyledText style={styles.heading}>Add New Tile</StyledText>
          <View style={styles.placeholder} />
        </View>
        <View style={styles.content}>
          <ButtonWithIcon
            icon={<Ionicons name="camera" size={32} color="#9b5de5" />}
            text="Take photo"
          />
          <StyledText style={styles.subheading}>Caption</StyledText>
          <TextInput
            style={[
              styles.input,
              !text.trim() && attemptedSubmit ? styles.errorInput : null,
            ]}
            onChangeText={onChangeText}
            value={text}
            maxLength={15}
            placeholder="E.g. Specific book"
          />
          <StyledText style={styles.subheading}>Select Category</StyledText>
          <Dropdown
            data={categories}
            labelField="label"
            valueField="value"
            placeholder="Categories"
            value={selectedCategory}
            onChange={(item) => setSelectedCategory(item.value)}
            style={[
              styles.dropdown,
              !selectedCategory && attemptedSubmit ? styles.errorInput : null,
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.optionTextStyle}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAdd()}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
    marginBottom: 40,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  placeholder: {
    width: 44,
    height: 44,
  },
  heading: {
    fontSize: 36,
    fontWeight: 700,
  },
  subheading: {
    fontWeight: 600,
    marginTop: 24,
  },
  content: {
    flex: 1,
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    paddingHorizontal: 30,
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
  dropdown: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px 2px #dcdcdcff",
  },
  placeholderStyle: {
    color: "#c5c5c5ff",
    fontSize: 24,
  },
  selectedTextStyle: {
    color: "#535252ff",
    fontSize: 24,
  },
  optionTextStyle: {
    color: "#535252ff",
    fontSize: 18,
  },
  addButton: {
    width: 128,
    backgroundColor: "#9b5de5",
    padding: 10,
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
  footer: {
    width: "100%",
    padding: 24,
    alignItems: "center",
  },
  errorInput: {
    boxShadow: "0px 0px 4px 2px #ee4e4eff",
  },
});
