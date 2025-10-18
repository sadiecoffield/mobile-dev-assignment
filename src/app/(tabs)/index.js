import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "../../components/CategoryButton";

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <CategoryButton category="Feelings" colour="#9b5de5"></CategoryButton>
      <CategoryButton category="Needs" colour="#F2CA00"></CategoryButton>
      <CategoryButton category="People" colour="#3bceac"></CategoryButton>
      <CategoryButton category="Things" colour="#f15bb5"></CategoryButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    marginTop: 100,
    marginBottom: 40,
    color: "#161B33 ",
  },
});
