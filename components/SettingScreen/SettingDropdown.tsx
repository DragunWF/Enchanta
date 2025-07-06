import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { mainColors } from "../../constants/colors";

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
          style={styles.dropdown}
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
    color: mainColors.softWhite,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
  inputContainer: {
    flexDirection: "row",
  },
  dropdown: {
    flex: 1,
    fontFamily: "quicksand",
    backgroundColor: mainColors.secondary100,
    borderRadius: 15,
    padding: 10,
  },
  selectedText: {
    fontFamily: "quicksand",
    color: "black",
  },
  placeholderText: {
    fontFamily: "quicksand",
    color: "gray",
  },
});

export default SettingDropdown;
