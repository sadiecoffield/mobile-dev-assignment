import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../data/categories";
import StyledText from "../components/StyledText";
import TileList from "../components/TileList";
import { capatilize } from "../utils/capatilize";

export default function CategoryScreen() {
  const router = useRouter();

  // Get category name from url parameters
  const { categoryName } = useLocalSearchParams();

  // Get the data for that category from 'categories'
  const categoryData = categories[categoryName?.toLowerCase()] || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={40} color="#535252ff" />
        </TouchableOpacity>
        <StyledText style={styles.heading}>
          {capatilize(categoryData.title)}
        </StyledText>
        <View style={styles.placeholder} />
      </View>
      <TileList
        categoryName={categoryName}
        removeTile={false}
        selectedTiles={[]}
        setSelectedTiles={[]}
        tilesData={categories}
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
  listContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
