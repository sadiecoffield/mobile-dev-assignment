import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryDropdown from "../components/CategoryDropdown";
import StyledText from "../components/StyledText";
import TileList from "../components/TileList";

export default function RemoveTileScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("needs");
  const [selectedTiles, setSelectedTiles] = useState([]);

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
          onPress: () => console.log("OK Pressed"), // REMOVE SELECTED TILES FROM TILELIST
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
      <TileList
        categoryName={selectedCategory}
        removeTile={true}
        selectedTiles={selectedTiles}
        setSelectedTiles={setSelectedTiles}
      />
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
});
