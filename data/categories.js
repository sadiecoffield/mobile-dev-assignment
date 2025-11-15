import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createTile } from "../src/models/tile";

export const categories = {
  feelings: {
    title: "Feelings",
    color: "#9b5de5",
    tiles: [
      createTile({
        text: "Happy",
        zone: "green",
        icon: <Entypo name="emoji-happy" size={40} color="#1c6534ff" />,
      }),
      createTile({
        text: "Calm",
        zone: "green",
        icon: <FontAwesome6 name="face-meh" size={40} color="#1c6534ff" />,
      }),
      createTile({
        text: "Tired",
        zone: "blue",
        icon: <FontAwesome6 name="face-tired" size={40} color="#0b4d80ff" />,
      }),
      createTile({
        text: "Sad",
        zone: "blue",
        icon: <FontAwesome6 name="face-frown" size={40} color="#0b4d80ff" />,
      }),
      createTile({
        text: "Sick",
        zone: "blue",
        icon: (
          <MaterialCommunityIcons
            name="emoticon-sick-outline"
            size={50}
            color="#0b4d80ff"
          />
        ),
      }),
      createTile({
        text: "Bored",
        zone: "blue",
        icon: (
          <FontAwesome6 name="face-rolling-eyes" size={40} color="#0b4d80ff" />
        ),
      }),
      createTile({
        text: "Worried",
        zone: "yellow",
        icon: <FontAwesome6 name="face-grimace" size={40} color="#916300ff" />,
      }),
      createTile({
        text: "Excited",
        zone: "yellow",
        icon: (
          <FontAwesome6 name="face-grin-squint" size={40} color="#916300ff" />
        ),
      }),
      createTile({
        text: "Silly",
        zone: "yellow",
        icon: (
          <FontAwesome6 name="face-grin-tongue" size={40} color="#916300ff" />
        ),
      }),
      createTile({
        text: "Angry",
        zone: "red",
        icon: <FontAwesome6 name="face-angry" size={40} color="#882e2eff" />,
      }),
      createTile({
        text: "Panic",
        zone: "red",
        icon: <FontAwesome6 name="face-tired" size={40} color="#882e2eff" />,
      }),
    ],
  },
  needs: {
    title: "Needs",
    color: "#f2a500ff",
    tiles: [
      createTile({
        text: "Snack",
        icon: (
          <MaterialCommunityIcons
            name="food-apple"
            size={40}
            color="#916300ff"
          />
        ),
      }),
      createTile({
        text: "Water",
        icon: <FontAwesome6 name="glass-water" size={40} color="#916300ff" />,
      }),
      createTile({
        text: "Toilet",
        icon: <FontAwesome6 name="toilet-paper" size={40} color="#916300ff" />,
      }),
      createTile({
        text: "Quiet Time",
        icon: (
          <MaterialCommunityIcons name="sleep" size={40} color="#916300ff" />
        ),
      }),
      createTile({
        text: "Outside",
        icon: <Foundation name="trees" size={40} color="#916300ff" />,
      }),
    ],
  },
  people: {
    title: "People",
    color: "#3bceac",
    tiles: [
      createTile({
        text: "Mum",
        icon: (
          <MaterialCommunityIcons
            name="face-woman"
            size={40}
            color="#227864ff"
          />
        ),
      }),
      createTile({
        text: "Dad",
        icon: (
          <MaterialCommunityIcons name="face-man" size={40} color="#227864ff" />
        ),
      }),
      createTile({
        text: "Brother",
        icon: (
          <MaterialCommunityIcons
            name="face-man-outline"
            size={40}
            color="#227864ff"
          />
        ),
      }),
      createTile({
        text: "Sister",
        icon: (
          <MaterialCommunityIcons
            name="face-woman-outline"
            size={40}
            color="#227864ff"
          />
        ),
      }),
      createTile({
        text: "Grandad",
        icon: <MaterialIcons name="elderly" size={40} color="#227864ff" />,
      }),
      createTile({
        text: "Granny",
        icon: (
          <MaterialIcons name="elderly-woman" size={40} color="#227864ff" />
        ),
      }),
    ],
  },
  things: {
    title: "Things",
    color: "#f15bb5",
    tiles: [
      createTile({
        text: "Book",
        icon: <FontAwesome6 name="book" size={40} color="#7e2f5eff" />,
      }),
      createTile({
        text: "Music",
        icon: <Foundation name="music" size={40} color="#7e2f5eff" />,
      }),
      createTile({
        text: "Toy",
        icon: <MaterialIcons name="toys" size={40} color="#7e2f5eff" />,
      }),
      createTile({
        text: "Pencil",
        icon: <FontAwesome6 name="pencil" size={40} color="#7e2f5eff" />,
      }),
      createTile({
        text: "Paper",
        icon: <Foundation name="page" size={40} color="#7e2f5eff" />,
      }),
    ],
  },
};
