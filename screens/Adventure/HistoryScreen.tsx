import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, FlatList } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import AdventureResultCard from "../../components/Adventure/AdventureResultCard";
import AdventureResult from "../../models/adventureResult";
import { fetchAdventureResults } from "../../helpers/tools/database";

function HistoryScreen() {
  const [adventureHistory, setAdventureHistory] = useState<AdventureResult[]>(
    []
  );

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const data = await fetchAdventureResults();
        setAdventureHistory(data);
      }

      fetchData();
    }, [])
  );

  function renderAdventureResultCard({ item }: { item: AdventureResult }) {
    return <AdventureResultCard adventureResult={item} />;
  }

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>History of Adventures</Title>
        <View style={styles.resultListContainer}>
          <FlatList
            renderItem={renderAdventureResultCard}
            data={adventureHistory}
            keyExtractor={(item) => item.getId().toString()}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.resultList}
          />
        </View>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  resultListContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  resultList: {
    gap: 20,
  },
});

export default HistoryScreen;
