import { useEffect, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import Title from "../components/ui/Title";
import SettingDropdown from "../components/ui/SettingDropdown";
import { DropdownItem } from "../components/ui/SettingDropdown";
import { ChatContext } from "../store/chatContext";
import { BotContext } from "../store/botContext";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";
import { toTitleCase } from "../helpers/tools/utils";
import { quirkVariations } from "../helpers/bot/botFactorsData";

function SettingsScreen() {
  const chatContext = useContext(ChatContext);
  const botContext = useContext(BotContext);

  const moodDropdownItems = Object.values(MOOD).map((mood) =>
    convertToDropdownItem(mood)
  );
  const bondDropdownItems = Object.values(BOND_LEVEL).map((bondLevel) =>
    convertToDropdownItem(bondLevel)
  );
  const quirkVariationDropdownItems = quirkVariations.map((quirkVariation) =>
    convertToDropdownItem(quirkVariation)
  );

  // Add state to track selected mood
  const [selectedMood, setSelectedMood] = useState({} as DropdownItem);
  const [selectedBondLevel, setSelectedBondLevel] = useState(
    {} as DropdownItem
  );
  const [selectedQuirkVariation, setSelectedQuirkVariation] = useState(
    {} as DropdownItem
  );

  useEffect(() => {
    setSelectedMood(convertToDropdownItem(botContext.mood));
    setSelectedBondLevel(convertToDropdownItem(botContext.bondLevel));
    setSelectedQuirkVariation(convertToDropdownItem(botContext.quirkVariation));
  }, [botContext.mood]);

  function convertToDropdownItem(value: string): DropdownItem {
    return {
      label: toTitleCase(value),
      value,
    };
  }

  function onMoodDropdownSelected(item: DropdownItem) {
    setSelectedMood(item);
    botContext.updateMood(item.value as MOOD);
  }

  function onBondLevelDropdownSelected(item: DropdownItem) {
    setSelectedBondLevel(item);
    botContext.updateBond(item.value as BOND_LEVEL);
  }

  function onQuirkVariationDropdownSelected(item: DropdownItem) {
    setSelectedQuirkVariation(item);
    botContext.updateQuirk(item.value);
  }

  return (
    <View>
      <Title>Settings</Title>
      <SettingDropdown
        label="Bot Current Mood"
        data={moodDropdownItems}
        onChange={onMoodDropdownSelected}
        value={selectedMood.value}
        placeholder="Current Mood"
      />
      <SettingDropdown
        label="Bot Current Bond Level"
        data={bondDropdownItems}
        onChange={onBondLevelDropdownSelected}
        value={selectedBondLevel.value}
        placeholder="Current Bond Level"
      />
      <SettingDropdown
        label="Bot Quirk Variation"
        data={quirkVariationDropdownItems}
        onChange={onQuirkVariationDropdownSelected}
        value={selectedQuirkVariation.value}
        placeholder="Quirk Variation"
      />
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
