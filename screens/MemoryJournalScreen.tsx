import { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { BotContext } from "../store/botContext";
import ImportantFact from "../models/importantFact";
import Title from "../components/ui/Title";

function MemoryJournalScreen() {
  const botContext = useContext(BotContext);
  const isMemoryEmpty = !botContext.importantFacts.length;

  function renderMemory(itemData: ListRenderItemInfo<ImportantFact>) {
    const importantFact: string = itemData.item.getContent();
    return (
      <View style={styles.factContainer}>
        <Text style={styles.importantFactText}>{importantFact}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title>Angelina's Memories of You</Title>
      {isMemoryEmpty ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Start telling things about yourself to the bot for stuff to fill up
            here!
          </Text>
        </View>
      ) : (
        <FlatList
          data={botContext.importantFacts}
          renderItem={renderMemory}
          keyExtractor={(item: ImportantFact) => String(item.getId())}
          alwaysBounceVertical={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  factContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  importantFactText: {
    fontFamily: "quicksand",
    fontSize: 16,
  },
  messageContainer: {
    margin: 10,
    alignItems: "center",
  },
  messageText: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default MemoryJournalScreen;
