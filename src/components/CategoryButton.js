import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { capatilize } from "../utils/capatilize";

export default function CategoryButton(props) {
  const { category, colour } = props;
  const router = useRouter();
  let icon = null;
  let shadowColour = "";

  // Get each category's corresponding icon and shadow colour
  if (category === "feelings") {
    icon = <MaterialIcons name="emoji-emotions" size={40} color="#513079ff" />;
    shadowColour = "#513079ff";
  } else if (category === "needs") {
    icon = (
      <MaterialCommunityIcons
        name="food-fork-drink"
        size={40}
        color="#916300ff"
      />
    );
    shadowColour = "#916300ff";
  } else if (category === "people") {
    icon = <FontAwesome6 name="people-group" size={40} color="#227864ff" />;
    shadowColour = "#227864ff";
  } else {
    icon = (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={40}
        color="#7e2f5eff"
      />
    );
    shadowColour = "#7e2f5eff";
  }

  return (
    <TouchableOpacity
      style={[
        styles.categoryBtn,
        { backgroundColor: colour, boxShadow: `2px 4px 4px ${shadowColour}` },
      ]}
      onPress={() => {
        router.navigate({
          pathname: "/[category]",
          params: { categoryName: category },
        });
      }}
    >
      <Text>{icon}</Text>
      <Text style={styles.categoryText}>{capatilize(category)}</Text>
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
