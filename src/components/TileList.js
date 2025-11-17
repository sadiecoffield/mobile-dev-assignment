import { FlatList, Image, StyleSheet } from "react-native";
import { categories } from "../../data/categories";
import { speak } from "../api/text-to-speech";
import { getIcon } from "../utils/icons";
import Tile from "./Tile";

export default function TileList(props) {
  const { categoryName, removeTile, selectedTiles, setSelectedTiles } = props;

  // Get the data for that category from 'categories'
  const categoryData = categories[categoryName?.toLowerCase()] || {};

  // Toggle selected tiles when pressed
  const toggleTile = (text) => {
    if (!removeTile) return;

    setSelectedTiles((prev) => {
      // If tile is already in selected array
      if (prev.includes(text)) {
        // Remove tile from selection array and return new array
        return prev.filter((t) => t !== text);
      } else {
        // Add tile to selection
        return [...prev, text];
      }
    });
  };

  return (
    <FlatList
      data={categoryData.tiles}
      renderItem={({ item }) => {
        let tileColour = "";
        let shadowColour = "";

        if (categoryName === "feelings") {
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
        } else if (categoryName === "needs") {
          tileColour = "#f2a500ff";
          shadowColour = "#916300ff";
        } else if (categoryName === "people") {
          tileColour = "#3bceac";
          shadowColour = "#227864ff";
        } else {
          tileColour = "#f15bb5";
          shadowColour = "#7e2f5eff";
        }

        return (
          <Tile
            onPress={
              // Pass correct onPress function
              removeTile ? () => toggleTile(item.text) : () => speak(item.text)
            }
            style={
              selectedTiles.includes(item.text) && removeTile
                ? styles.tileToRemove
                : null
            }
            colour={tileColour}
            shadowColour={shadowColour}
            text={item.text}
            icon={
              !item.custom ? (
                getIcon(item.iconLibrary, item.iconName, item.iconColor)
              ) : (
                <Image
                  source={{ uri: item.photoUri }}
                  style={[
                    styles.photo,
                    { boxShadow: `2px 4px 4px ${shadowColour}` },
                  ]}
                />
              )
            }
          />
        );
      }}
      horizontal={false}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tileToRemove: {
    borderWidth: 3,
    borderColor: "#535252ff",
    opacity: 0.5,
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
