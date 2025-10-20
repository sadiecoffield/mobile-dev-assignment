import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "../../components/CategoryButton";
import StyledText from "../../components/StyledText";

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText style={styles.heading}>Categories</StyledText>
      <CategoryButton category="Feelings" colour="#9b5de5"></CategoryButton>
      <CategoryButton category="Needs" colour="#f2a500ff"></CategoryButton>
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
    backgroundColor: "white",
  },
  heading: {
    fontSize: 36,
    fontWeight: 700,
    marginTop: 100,
    marginBottom: 40,
  },
});
