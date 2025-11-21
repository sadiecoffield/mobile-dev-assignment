import { FlatList, Image, StyleSheet, View } from "react-native";
import { categories } from "../../data/categories";
import { speak } from "../api/text-to-speech";
import { useProfiles } from "../contexts/ProfilesProvider";
import { getIcon } from "../utils/icons";
import { getTileSize } from "../utils/tileSize";
import Tile from "./Tile";

export default function TileList(props) {
  const { categoryName, removeTile, selectedTiles, setSelectedTiles } = props;
  const { currentProfile } = useProfiles();

  // Get the default data for that category from 'categories'
  const categoryData = categories[categoryName?.toLowerCase()] || {};

  // Get all the custom tiles for the current profile
  const customTiles = [...(currentProfile?.customTiles ?? [])];

  // Get the custom tiles for this category
  const categoryCustomTiles = currentProfile?.customTiles?.filter(
    (tile) => tile.categoryName === categoryName
  );

  // Merge the default tiles array with the custom tiles array
  const mergedTiles = [...categoryData.tiles, ...categoryCustomTiles];

  // Toggle selected tiles when pressed
  const toggleTile = (tileID) => {
    if (!removeTile) return;

    setSelectedTiles((prev) => {
      // If tile is already in selected array
      if (prev.includes(tileID)) {
        // Remove tile from selection array and return new array
        return prev.filter((id) => id !== tileID);
      } else {
        // Add tile to selection
        return [...prev, tileID];
      }
    });
  };

  // If there's only one tile in the array
  if (customTiles.length === 1) {
    // Add placeholder to array to align single tile to the left of screen
    customTiles = [...customTiles, { placeholder: true }];
  }

  return (
    <FlatList
      data={!removeTile ? mergedTiles : categoryCustomTiles}
      renderItem={({ item }) => {
        // Render placeholder tile if it exists
        if (item.placeholder) {
          const tileSize = getTileSize();
          return <View style={{ width: tileSize, height: tileSize }} />;
        }

        let tileColour = "";
        let shadowColour = "";

        // Set tile colours depending on the category
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
              removeTile ? () => toggleTile(item.id) : () => speak(item.text)
            }
            style={
              selectedTiles.includes(item.id) && removeTile
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
                  source={{ uri: item.photo }}
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
      columnWrapperStyle={{ justifyContent: "flex-start" }}
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
