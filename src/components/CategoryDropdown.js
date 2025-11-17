import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function CategoryDropdown(props) {
  const { selectedCategory, setSelectedCategory, placeholder, errorStyle } =
    props;

  // List of dropdown options and values
  const categories = [
    { label: "Needs", value: "needs" },
    { label: "People", value: "people" },
    { label: "Things", value: "things" },
  ];

  return (
    <Dropdown
      data={categories}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={selectedCategory}
      onChange={(item) => setSelectedCategory(item.value)}
      style={
        errorStyle ? [styles.dropdown, styles.errorInput] : styles.dropdown
      }
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      itemTextStyle={styles.optionTextStyle}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: 24,
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px 2px #dcdcdcff",
  },
  placeholderStyle: {
    color: "#c5c5c5ff",
    fontSize: 24,
  },
  selectedTextStyle: {
    color: "#535252ff",
    fontSize: 24,
  },
  optionTextStyle: {
    color: "#535252ff",
    fontSize: 18,
  },
  errorInput: {
    boxShadow: "0px 0px 4px 2px #ee4e4eff",
  },
});
