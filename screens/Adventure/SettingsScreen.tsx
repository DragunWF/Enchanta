import { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";

import { DropdownItem } from "../../components/SettingScreen/SettingDropdown";
import CustomText from "../../components/ui/CustomText";
import Title from "../../components/ui/Title";
import SettingDropdown from "../../components/SettingScreen/SettingDropdown";
import SettingButton from "../../components/SettingScreen/SettingButton";
import CustomBackground from "../../components/ui/CustomBackground";

import { ChatContext } from "../../store/ChatContext";
import { BotContext } from "../../store/BotContext";
import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import { toTitleCase } from "../../helpers/tools/utils";
import { defaultMood, quirkVariations } from "../../helpers/bot/botFactorsData";
import { mainColors } from "../../constants/colors";

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

  function resetConversationHandler() {
    confirmationAlert(
      "This will clear the entire chat history and it cannot be undone!",
      () => {
        chatContext.clearChatHistory();
      }
    );
  }

  function resetBehaviorHandler() {
    confirmationAlert(
      "This will set the bond level and quirk variation back to their default state.",
      () => {
        resetMood();
        resetBondLevel();
        resetQuirkVariation();
      }
    );
  }

  function resetMemoryJournalHandler() {
    confirmationAlert(
      "This will delete all the journal entries Angelina listed in the memory journal tab. Are you sure about this? This action cannot be undone!",
      () => {
        botContext.clearMemoryJournalEntries();
      }
    );
  }

  function resetAllHandler() {
    confirmationAlert(
      "This will reset the conversation, bot behavior, and memory journal. Are you sure you want to do this? This cannot be undone!",
      () => {
        chatContext.clearChatHistory();
        resetMood();
        resetBondLevel();
        resetQuirkVariation();
        botContext.clearMemoryJournalEntries();
      }
    );
  }

  function resetMood() {
    setSelectedMood(convertToDropdownItem(defaultMood));
    botContext.updateMood(defaultMood);
  }

  function resetBondLevel() {
    setSelectedBondLevel(convertToDropdownItem(BOND_LEVEL.LOW));
    botContext.updateBond(BOND_LEVEL.LOW);
  }

  function resetQuirkVariation() {
    setSelectedQuirkVariation(convertToDropdownItem(quirkVariations[0]));
    botContext.updateQuirk(quirkVariations[0]);
  }

  return (
    <CustomBackground>
      <View>
        <Title>Settings</Title>
        <ScrollView>
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
          <CustomText style={styles.sectionTitle}>Reset Controls</CustomText>
          <SettingButton
            label="Reset Conversation"
            onPress={resetConversationHandler}
          />
          <SettingButton
            label="Reset Behavior"
            onPress={resetBehaviorHandler}
          />
          <SettingButton
            label="Reset Memory Journal"
            onPress={resetMemoryJournalHandler}
          />
          <SettingButton label="Reset All" onPress={resetAllHandler} />
        </ScrollView>
      </View>
    </CustomBackground>
  );
}

function convertToDropdownItem(value: string): DropdownItem {
  return {
    label: toTitleCase(value),
    value,
  };
}

function confirmationAlert(message: string, onConfirm: () => void) {
  Alert.alert("Confirm Reset Action", message, [
    {
      text: "Yes",
      onPress: onConfirm,
    },
    {
      text: "No",
      style: "cancel",
    },
  ]);
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 10,
    color: mainColors.softWhite,
  },
});

export default SettingsScreen;
