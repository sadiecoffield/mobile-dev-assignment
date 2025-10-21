import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CategoryScreen() {
  const categories = {
    feelings: {
      color: "#513079ff",
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
          icon: (
            <FontAwesome6 name="face-rolling-eyes" size={32} color="black" />
          ),
        },
        {
          text: "Worried",
          zone: "yellow",
          icon: <FontAwesome6 name="face-grimace" size={32} color="black" />,
        },
        {
          text: "Excited",
          zone: "yellow",
          icon: (
            <FontAwesome6 name="face-grin-squint" size={32} color="black" />
          ),
        },
        {
          text: "Silly",
          zone: "yellow",
          icon: (
            <FontAwesome6 name="face-grin-tongue" size={32} color="black" />
          ),
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
      color: "#513079ff",
      tiles: [
        {
          text: "Happy",
          icon: <Entypo name="emoji-happy" size={32} color="black" />,
        },
        {
          text: "Calm",
          icon: <FontAwesome6 name="face-meh" size={32} color="black" />,
        },
        {
          text: "",
          icon: <FontAwesome6 name="face-meh" size={32} color="black" />,
        },
        { text: "Focused" },
      ],
    },
  };
}
