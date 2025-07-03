import { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import Title from "../components/ui/Title";
import { ChatContext } from "../store/chatContext";
import { BotContext } from "../store/botContext";
import { moodNames } from "../helpers/bot/botFactorsData";

function SettingsScreen() {
  const chatContext = useContext(ChatContext);
  const botContext = useContext(BotContext);

  // Add state to track selected mood
  const [selectedMood, setSelectedMood] = useState(moodNames[0]);

  return (
    <View>
      <Title>Settings</Title>
      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Bot Current Mood</Text>
        <View style={styles.inputContainer}>
          <Dropdown
            style={styles.textInput}
            data={moodNames}
            selectedTextStyle={{ color: "white" }}
            placeholderStyle={{ color: "white" }}
            placeholder="Current Mood"
            valueField="value"
            labelField="label"
            value={selectedMood} // Add this line
            onChange={(item) => {
              setSelectedMood(item.value); // Update state when selection changes
            }}
          />
          <View style={styles.button}>
            <Button title="Save" />
          </View>
        </View>
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Bot Quirk Variation</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Hello" />
          <View style={styles.button}>
            <Button title="Save" />
          </View>
        </View>
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
  button: {
    flex: 1,
  },
});

export default SettingsScreen;
