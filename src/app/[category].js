import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../data/categories";
import StyledText from "../components/StyledText";
import Tile from "../components/Tile";

export default function CategoryScreen() {
  // Get category name from url parameters
  const { categoryName } = useLocalSearchParams();

  const categoryData = categories[categoryName?.toLowerCase()] || {};

  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>{categoryData.title}</StyledText>
      <FlatList
        data={categoryData.tiles}
        renderItem={(tile) => {
          return <Tile text={tile.text} icon={tile.icon} />;
        }}
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
  heading: {
    fontSize: 36,
    fontWeight: 700,
    marginTop: 100,
    marginBottom: 40,
  },
});
