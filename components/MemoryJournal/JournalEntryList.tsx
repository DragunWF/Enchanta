import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

import { mainColors } from "../../constants/colors";
import MemoryJournalEntry from "../../models/memoryJournalEntry";

interface JournalEntryListProps {
  data: MemoryJournalEntry[];
}

function JournalEntryList({ data }: JournalEntryListProps) {
  function renderMemory(itemData: ListRenderItemInfo<MemoryJournalEntry>) {
    const importantFact: string = itemData.item.getContent();
    return (
      <View style={styles.factContainer}>
        <Text style={styles.importantFactText}>{importantFact}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderMemory}
      keyExtractor={(item: MemoryJournalEntry) => String(item.getId())}
      alwaysBounceVertical={false}
      style={styles.factList}
    />
  );
}

const fontSize = 16;
const styles = StyleSheet.create({
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
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
  },
  importantFactText: {
    fontFamily: "quicksand",
    fontSize: fontSize,
    lineHeight: fontSize * 1.5,
    color: mainColors.softWhite,
  },
});

export default JournalEntryList;
