import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryButton(props) {
  const { category, colour } = props;
  let icon = null;

  // Get each category's corresponding icon
  if (category === "Feelings") {
    icon = <Entypo name="emoji-happy" size={40} color="white" />;
  } else if (category === "Needs") {
    icon = (
      <MaterialCommunityIcons name="food-fork-drink" size={40} color="white" />
    );
  } else if (category === "People") {
    icon = <FontAwesome6 name="people-group" size={40} color="white" />;
  } else {
    icon = (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={40}
        color="white"
      />
    );
  }

  return (
    <TouchableOpacity style={[styles.categoryBtn, { backgroundColor: colour }]}>
      <Text>{icon}</Text>
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryBtn: {
    width: "80%",
    height: 120,
    borderRadius: 15,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 8,
  },
});
