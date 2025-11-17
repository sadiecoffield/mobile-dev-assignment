import { Dimensions } from "react-native";

// Calculate tile spacing depending on screen size
export function getTileSize() {
  const screenSize = Dimensions.get("window").width;
  const tileSize = (screenSize - 60) / 2;
  return tileSize;
}
