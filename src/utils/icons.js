import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const iconLibraries = {
  Entypo,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation,
};

// Return an icon using the data from tile object
export function getIcon(library, name, color) {
  const IconComponent = iconLibraries[library];

  if (!IconComponent) {
    console.error("Icon not found:", library);
    return null;
  }

  return <IconComponent name={name} size={40} color={color} />;
}
