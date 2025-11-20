import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Directory, File, Paths } from "expo-file-system";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonWithIcon from "../components/ButtonWithIcon";
import CategoryDropdown from "../components/CategoryDropdown";
import StyledText from "../components/StyledText";
import { useCategories } from "../contexts/CategoriesContext";
import { createTile } from "../models/tile";

export default function AddTileScreen() {
  const router = useRouter();
  const [text, onChangeText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const { photoUri } = useLocalSearchParams(); // Get the URI of picture taken
  const { setCategoriesData } = useCategories();

  // Move the photo from cache to permanent storage
  async function savePermanentPhoto(photoUri) {
    try {
      // Get the filename from the photo's location in cache
      const filename = photoUri.split("/").pop();

      // Create directory in permanent storage to store tile photos
      const photosDir = new Directory(Paths.document, "tile-photos");

      // Only create the directory if it doesn't already exist
      if (!photosDir) {
        photosDir.create();
      }

      // Create file object for the photo
      const file = new File(photoUri);

      // Move the photo from cache to the new directory in permanent storage
      file.move(photosDir);

      // Form new file path to the photo to store in tile objects
      const newPath = `${photosDir.uri}/${filename}`;

      return newPath;
    } catch (e) {
      console.log("Error saving photo permanently: ", e);
    }
  }

  // Handle "Add" button press
  async function handleAdd() {
    setAttemptedSubmit(true);

    // Alert user if no picture has been taken
    if (!photoUri) {
      Alert.alert(
        "Missing Tile Picture",
        "Take a photo to display on the new tile",
        [{ text: "OK" }]
      );
      return;
    }

    // Alert user if input fields aren't filled
    if (!text.trim() || !selectedCategory) {
      Alert.alert(
        "Input Field Empty",
        "Enter a caption and select a category for the tile",
        [{ text: "OK" }]
      );
      return;
    }

    // Get path to photo in permanent storage
    const permanentPhoto = await savePermanentPhoto(photoUri);

    // Create new tile object with photo and caption
    const newTileObj = createTile({
      text,
      photo: permanentPhoto,
      custom: true,
    });

    // Add new tile to the tiles array of the selected category
    setCategoriesData((prev) => ({
      // Copy previous category into new categories object
      ...prev,
      // Update selected category object's tiles array to include new tile
      [selectedCategory]: {
        ...prev[selectedCategory],
        tiles: [...prev[selectedCategory].tiles, newTileObj],
      },
    }));

    router.back(); // Return to settings page
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
          {
            // If photo has been taken, display the retake button
            photoUri ? (
              <TouchableOpacity onPress={() => router.replace("/camera")}>
                <MaterialCommunityIcons
                  name="camera-retake"
                  size={40}
                  color="#9b5de5"
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.placeholder} />
            )
          }
        </View>
        <View style={styles.content}>
          {
            // If a photo has been taken, display preview, if not display "Take photo" button
            photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photo} />
            ) : (
              <ButtonWithIcon
                icon={<Ionicons name="camera" size={32} color="#9b5de5" />}
                text="Take Photo"
                onPress={() => router.replace("/camera")}
              />
            )
          }

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
          <CategoryDropdown
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            placeholder="Categories"
            errorStyle={
              !selectedCategory && attemptedSubmit ? styles.errorInput : null
            }
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
  photo: {
    width: 150,
    height: 150,
    marginHorizontal: "auto",
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: "0px 2px 6px 2px #dcdcdcff",
  },
});
