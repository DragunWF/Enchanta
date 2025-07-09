import { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  Button,
} from "react-native";

import CustomBackground from "../components/ui/CustomBackground";
import { BotContext } from "../store/BotContext";
import MemoryJournalEntry from "../models/memoryJournalEntry";
import Title from "../components/ui/Title";
import { mainColors } from "../constants/colors";

function MemoryJournalScreen() {
  const botContext = useContext(BotContext);
  const isMemoryEmpty = !botContext.memoryJournalEntry.length;

  function renderMemory(itemData: ListRenderItemInfo<MemoryJournalEntry>) {
    const importantFact: string = itemData.item.getContent();
    return (
      <View style={styles.factContainer}>
        <Text style={styles.importantFactText}>{importantFact}</Text>
      </View>
    );
  }

  return (
    <CustomBackground>
      <View style={styles.container}>
        <Title>Angelina's Memories of You</Title>
        {isMemoryEmpty ? (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              Start telling things about yourself to the bot for stuff to fill
              up here!
            </Text>
          </View>
        ) : (
          <FlatList
            data={botContext.memoryJournalEntry}
            renderItem={renderMemory}
            keyExtractor={(item: MemoryJournalEntry) => String(item.getId())}
            alwaysBounceVertical={false}
            style={styles.factList}
          />
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
  factList: {
    width: "85%",
    paddingBottom: 50,
  },
  factContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: mainColors.secondary300,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: mainColors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  importantFactText: {
    fontFamily: "quicksand",
    fontSize: 16,
    color: mainColors.softWhite,
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
