import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText from "../components/StyledText";
import TileList from "../components/TileList";

export default function RemoveTileScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Feelings");

  const categories = [
    { label: "Feelings", value: "Feelings" },
    { label: "Needs", value: "Needs" },
    { label: "People", value: "People" },
    { label: "Things", value: "Things" },
  ];

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
        <TouchableOpacity>
          <Ionicons name="trash" size={40} color="#ee4e4eff" />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownContainer}>
        <Dropdown
          data={categories}
          labelField="label"
          valueField="value"
          placeholder={selectedCategory}
          value={selectedCategory}
          onChange={(item) => setSelectedCategory(item.value)}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.optionTextStyle}
        />
      </View>
      <TileList categoryName={selectedCategory} removeTile={true} />
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
