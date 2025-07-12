import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import JournalEntryList from "../../components/MemoryJournal/JournalEntryList";
import Title from "../../components/ui/Title";
import { BotContext } from "../../store/BotContext";
import { mainColors } from "../../constants/colors";

function MemoryJournalScreen() {
  const botContext = useContext(BotContext);
  const isMemoryEmpty = !botContext.memoryJournalEntries.length;

  return (
    <CustomBackground>
      <View style={styles.container}>
        <Title>Angelina's Thoughts of You</Title>
        {isMemoryEmpty ? (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Start telling things about yourself to the bot for stuff to fill
              up here!
            </Text>
          </View>
        ) : (
          <JournalEntryList data={botContext.memoryJournalEntries} />
        )}
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  messageContainer: {
    margin: 10,
    alignItems: "center",
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    color: mainColors.softWhite,
  },
});

export default MemoryJournalScreen;
