import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../data/categories";
import StyledText from "../components/StyledText";
import Tile from "../components/Tile";

export default function CategoryScreen() {
  // Get category name from url parameters
  const { categoryName } = useLocalSearchParams();

  // Get the data for that category from 'categories'
  const categoryData = categories[categoryName?.toLowerCase()] || {};

  let tileColour = "";

  if (categoryName === "Feelings") {
    tileColour = "#9b5de5";
  } else if (categoryName === "Needs") {
    tileColour = "#f2a500ff";
  } else if (categoryName === "People") {
    tileColour = "#3bceac";
  } else {
    tileColour = "#f15bb5";
  }

  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>{categoryData.title}</StyledText>
      <FlatList
        data={categoryData.tiles}
        renderItem={({ item }) => {
          return <Tile colour={tileColour} text={item.text} icon={item.icon} />;
        }}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
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
    padding: 10,
  },
  heading: {
    fontSize: 36,
    fontWeight: 700,
    marginTop: 100,
    marginBottom: 40,
  },
  listContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
