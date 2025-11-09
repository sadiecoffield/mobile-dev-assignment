import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { categories } from "../../data/categories";
import Tile from "./Tile";

export default function TileList(props) {
  const { categoryName, removeTile } = props;
  const [selectedTiles, setSelectedTiles] = useState([]);

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

        // Is this tile in the selected tiles array
        const isSelected = selectedTiles.includes(item.text);

        return (
          <Tile
            onPress={() => toggleTile(item.text)}
            style={removeTile && isSelected ? styles.tileToRemove : null}
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
});
