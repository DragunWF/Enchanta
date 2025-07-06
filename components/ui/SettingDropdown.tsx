import { StyleSheet, View, Text, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export interface DropdownItem {
  label: string;
  value: string;
}

interface SettingDropdownProps {
  label: string;
  data: any[];
  value: string;
  onChange: (selectedItem: DropdownItem) => void;
  placeholder?: string;
}

function SettingDropdown({
  label,
  data,
  onChange,
  value,
  placeholder = "",
}: SettingDropdownProps) {
  return (
    <View style={styles.settingContainer}>
      <Text style={styles.settingLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <Dropdown
          style={styles.textInput}
          data={data}
          selectedTextStyle={styles.selectedText}
          placeholderStyle={styles.placeholderText}
          placeholder={placeholder}
          valueField="value"
          labelField="label"
          value={value} // Add this line
          onChange={onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  settingLabel: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    flex: 4,
    backgroundColor: "lightgray",
    padding: 10,
  },
  selectedText: {
    color: "black",
  },
  placeholderText: {
    color: "gray",
  },
});

export default SettingDropdown;
