import Ionicons from "@expo/vector-icons/Ionicons";
import { File } from "expo-file-system";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryDropdown from "../components/CategoryDropdown";
import StyledText from "../components/StyledText";
import TileList from "../components/TileList";
import { useProfiles } from "../contexts/ProfilesProvider";

export default function RemoveTileScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("needs");
  const [selectedTiles, setSelectedTiles] = useState([]);
  const { setProfilesData, currentProfile, setCurrentProfile } = useProfiles();

  // Get the custom tiles for this category
  let categoryCustomTiles = currentProfile?.customTiles?.filter(
    (tile) => tile.categoryName === selectedCategory
  );

  // Delete tile photo from permanent storage when tile is deleted
  function deletePermanentPhoto(photo) {
    try {
      // Create file object for photo being deleted
      const file = new File(photo);

      // Delete the photo file from storage
      file.delete();
    } catch (e) {
      console.log("Error deleting photo permanently: ", e);
    }
  }

  function handleRemoveTile() {
    // If no tiles selected, alert user to select tiles
    if (selectedTiles.length === 0) {
      Alert.alert(
        "No tiles selected",
        "Select the tiles you would like to delete",
        [{ text: "OK" }]
      );
      return;
    }

    // If tiles are selected, get user confirmation
    Alert.alert(
      `Delete ${selectedTiles.length} tile${
        selectedTiles.length !== 1 ? "s" : ""
      }`,
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setProfilesData((prev) => {
              return prev.map((profile) => {
                // If it's the current profile
                if (profile.name === currentProfile.name) {
                  // Filter out the selected tiles from customTiles array
                  const updatedTiles = profile.customTiles.filter((tile) => {
                    // Delete tile photo permanently from deleted tile
                    if (selectedTiles.includes(tile.id)) {
                      deletePermanentPhoto(tile.photo);
                    }

                    return !selectedTiles.includes(tile.id);
                  });

                  // Set customTiles array to be the updated array
                  return {
                    ...profile,
                    customTiles: updatedTiles,
                  };
                }

                // If it's not the current profile, return unchanged profile object
                return profile;
              });
            });

            // Update the currentProfile object's custom tiles array
            setCurrentProfile((prev) => {
              return {
                ...prev,
                customTiles: prev.customTiles.filter(
                  (tile) => !selectedTiles.includes(tile.id)
                ),
              };
            });

            setSelectedTiles([]); // Clear selection after deletion
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={40} color="#535252ff" />
        </TouchableOpacity>
        <StyledText style={styles.heading}>Remove Tile</StyledText>
        <TouchableOpacity onPress={() => handleRemoveTile()}>
          <Ionicons name="trash" size={40} color="#ee4e4eff" />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownContainer}>
        <CategoryDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      {categoryCustomTiles.length > 0 ? (
        <TileList
          categoryName={selectedCategory}
          removeTile={true}
          selectedTiles={selectedTiles}
          setSelectedTiles={setSelectedTiles}
        />
      ) : (
        <View style={styles.emptyMessageContainer}>
          <StyledText style={styles.emptyMessage}>
            No tiles to remove
          </StyledText>
        </View>
      )}
    </SafeAreaView>
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
  dropdownContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  dropdown: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: 24,
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
  emptyMessageContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  emptyMessage: {
    color: "#c3c3c3ff",
  },
});
