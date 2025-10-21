import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const categories = {
  feelings: {
    color: "#9b5de5",
    tiles: [
      {
        text: "Happy",
        zone: "green",
        icon: <Entypo name="emoji-happy" size={32} color="black" />,
      },
      {
        text: "Calm",
        zone: "green",
        icon: <FontAwesome6 name="face-meh" size={32} color="black" />,
      },
      {
        text: "Tired",
        zone: "blue",
        icon: <FontAwesome6 name="face-tired" size={32} color="black" />,
      },
      {
        text: "Sad",
        zone: "blue",
        icon: <FontAwesome6 name="face-frown" size={32} color="black" />,
      },
      {
        text: "Sick",
        zone: "blue",
        icon: (
          <MaterialCommunityIcons
            name="emoticon-sick-outline"
            size={32}
            color="black"
          />
        ),
      },
      {
        text: "Bored",
        zone: "blue",
        icon: <FontAwesome6 name="face-rolling-eyes" size={32} color="black" />,
      },
      {
        text: "Worried",
        zone: "yellow",
        icon: <FontAwesome6 name="face-grimace" size={32} color="black" />,
      },
      {
        text: "Excited",
        zone: "yellow",
        icon: <FontAwesome6 name="face-grin-squint" size={32} color="black" />,
      },
      {
        text: "Silly",
        zone: "yellow",
        icon: <FontAwesome6 name="face-grin-tongue" size={32} color="black" />,
      },
      {
        text: "Angry",
        zone: "red",
        icon: <FontAwesome6 name="face-angry" size={32} color="black" />,
      },
      {
        text: "Panic",
        zone: "red",
        icon: <FontAwesome6 name="face-tired" size={32} color="black" />,
      },
    ],
  },
  needs: {
    color: "#f2a500ff",
    tiles: [
      {
        text: "Snack",
        icon: (
          <MaterialCommunityIcons name="food-apple" size={32} color="black" />
        ),
      },
      {
        text: "Water",
        icon: <FontAwesome6 name="glass-water" size={32} color="black" />,
      },
      {
        text: "Toilet",
        icon: <FontAwesome6 name="toilet-paper" size={32} color="black" />,
      },
      {
        text: "Quiet Time",
        icon: <MaterialCommunityIcons name="sleep" size={32} color="black" />,
      },
      {
        text: "Outside",
        icon: <Foundation name="trees" size={32} color="black" />,
      },
    ],
  },
  people: {
    color: "#3bceac",
    tiles: [
      {
        text: "Mum",
        icon: (
          <MaterialCommunityIcons name="face-woman" size={32} color="black" />
        ),
      },
      {
        text: "Dad",
        icon: (
          <MaterialCommunityIcons name="face-man" size={32} color="black" />
        ),
      },
      {
        text: "Brother",
        icon: (
          <MaterialCommunityIcons
            name="face-man-outline"
            size={32}
            color="black"
          />
        ),
      },
      {
        text: "Sister",
        icon: (
          <MaterialCommunityIcons
            name="face-woman-outline"
            size={32}
            color="black"
          />
        ),
      },
      {
        text: "Grandad",
        icon: <MaterialIcons name="elderly" size={32} color="black" />,
      },
      {
        text: "Granny",
        icon: <MaterialIcons name="elderly-woman" size={32} color="black" />,
      },
    ],
  },
  things: {
    color: "#f15bb5",
    tiles: [
      {
        text: "Book",
        icon: <FontAwesome6 name="book" size={32} color="black" />,
      },
      {
        text: "Music",
        icon: <Foundation name="music" size={32} color="black" />,
      },
      {
        text: "Toy",
        icon: <MaterialIcons name="toys" size={32} color="black" />,
      },
      {
        text: "Pencil",
        icon: <FontAwesome6 name="pencil" size={32} color="black" />,
      },
      {
        text: "Paper",
        icon: <Foundation name="page" size={24} color="black" />,
      },
    ],
  },
};
