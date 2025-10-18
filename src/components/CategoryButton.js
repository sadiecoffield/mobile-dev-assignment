import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryButton(props) {
  const { category, colour } = props;

  return (
    <TouchableOpacity style={[styles.categoryBtn, { backgroundColor: colour }]}>
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryBtn: {
    width: "80%",
    height: 120,
    borderRadius: 10,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    color: "white",
    fontSize: 24,
    fontWeight: 600,
  },
});
