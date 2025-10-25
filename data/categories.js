import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Crypto from "expo-crypto";

export const categories = {
  feelings: {
    title: "Feelings",
    color: "#9b5de5",
    tiles: [
      {
        id: Crypto.randomUUID(),
        text: "Happy",
        zone: "green",
        icon: <Entypo name="emoji-happy" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Calm",
        zone: "green",
        icon: <FontAwesome6 name="face-meh" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Tired",
        zone: "blue",
        icon: <FontAwesome6 name="face-tired" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Sad",
        zone: "blue",
        icon: <FontAwesome6 name="face-frown" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Sick",
        zone: "blue",
        icon: (
          <MaterialCommunityIcons
            name="emoticon-sick-outline"
            size={50}
            color="#513079ff"
          />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Bored",
        zone: "blue",
        icon: (
          <FontAwesome6 name="face-rolling-eyes" size={40} color="#513079ff" />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Worried",
        zone: "yellow",
        icon: <FontAwesome6 name="face-grimace" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Excited",
        zone: "yellow",
        icon: (
          <FontAwesome6 name="face-grin-squint" size={40} color="#513079ff" />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Silly",
        zone: "yellow",
        icon: (
          <FontAwesome6 name="face-grin-tongue" size={40} color="#513079ff" />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Angry",
        zone: "red",
        icon: <FontAwesome6 name="face-angry" size={40} color="#513079ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Panic",
        zone: "red",
        icon: <FontAwesome6 name="face-tired" size={40} color="#513079ff" />,
      },
    ],
  },
  needs: {
    title: "Needs",
    color: "#f2a500ff",
    tiles: [
      {
        id: Crypto.randomUUID(),
        text: "Snack",
        icon: (
          <MaterialCommunityIcons
            name="food-apple"
            size={40}
            color="#916300ff"
          />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Water",
        icon: <FontAwesome6 name="glass-water" size={40} color="#916300ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Toilet",
        icon: <FontAwesome6 name="toilet-paper" size={40} color="#916300ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Quiet Time",
        icon: (
          <MaterialCommunityIcons name="sleep" size={40} color="#916300ff" />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Outside",
        icon: <Foundation name="trees" size={40} color="#916300ff" />,
      },
    ],
  },
  people: {
    title: "People",
    color: "#3bceac",
    tiles: [
      {
        id: Crypto.randomUUID(),
        text: "Mum",
        icon: (
          <MaterialCommunityIcons
            name="face-woman"
            size={40}
            color="#227864ff"
          />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Dad",
        icon: (
          <MaterialCommunityIcons name="face-man" size={40} color="#227864ff" />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Brother",
        icon: (
          <MaterialCommunityIcons
            name="face-man-outline"
            size={40}
            color="#227864ff"
          />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Sister",
        icon: (
          <MaterialCommunityIcons
            name="face-woman-outline"
            size={40}
            color="#227864ff"
          />
        ),
      },
      {
        id: Crypto.randomUUID(),
        text: "Grandad",
        icon: <MaterialIcons name="elderly" size={40} color="#227864ff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Granny",
        icon: (
          <MaterialIcons name="elderly-woman" size={40} color="#227864ff" />
        ),
      },
    ],
  },
  things: {
    title: "Things",
    color: "#f15bb5",
    tiles: [
      {
        id: Crypto.randomUUID(),
        text: "Book",
        icon: <FontAwesome6 name="book" size={40} color="#7e2f5eff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Music",
        icon: <Foundation name="music" size={40} color="#7e2f5eff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Toy",
        icon: <MaterialIcons name="toys" size={40} color="#7e2f5eff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Pencil",
        icon: <FontAwesome6 name="pencil" size={40} color="#7e2f5eff" />,
      },
      {
        id: Crypto.randomUUID(),
        text: "Paper",
        icon: <Foundation name="page" size={40} color="#7e2f5eff" />,
      },
    ],
  },
};
