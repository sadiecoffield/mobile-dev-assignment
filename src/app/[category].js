import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../data/categories";
import StyledText from "../components/StyledText";
import Tile from "../components/Tile";

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
        <StyledText style={styles.heading}>{categoryData.title}</StyledText>
        <View style={styles.placeholder} />
      </View>
      <FlatList
        data={categoryData.tiles}
        renderItem={({ item }) => {
          let tileColour = "";
          let shadowColour = "";

          if (categoryName === "Feelings") {
            // Set tile colour to the corresponding regulation zone colour
            if (item.zone === "green") {
              tileColour = "#3ccc6cff";
              shadowColour = "#258344ff";
            } else if (item.zone === "yellow") {
              tileColour = "#f2a500ff";
              shadowColour = "#916300ff";
            } else if (item.zone === "blue") {
              tileColour = "#1896f6ff";
              shadowColour = "#0e568dff";
            } else {
              tileColour = "#ee4e4eff";
              shadowColour = "#852929ff";
            }
          } else if (categoryName === "Needs") {
            tileColour = "#f2a500ff";
            shadowColour = "#916300ff";
          } else if (categoryName === "People") {
            tileColour = "#3bceac";
            shadowColour = "#227864ff";
          } else {
            tileColour = "#f15bb5";
            shadowColour = "#7e2f5eff";
          }

          return (
            <Tile
              colour={tileColour}
              shadowColour={shadowColour}
              text={item.text}
              icon={item.icon}
            />
          );
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
