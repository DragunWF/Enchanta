import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import AdventureResultCard from "../../components/Adventure/AdventureResultCard";
import AdventureResult from "../../models/adventureResult";
import { fetchAdventureResults } from "../../helpers/tools/database";
import { StackNavigationProp } from "@react-navigation/stack";

interface HistoryScreenProps {
  navigation: StackNavigationProp<any>;
}

function HistoryScreen({ navigation }: HistoryScreenProps) {
  const [adventureHistory, setAdventureHistory] = useState<AdventureResult[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAdventureResults();
      console.log(data);
      setAdventureHistory(data);
    }

    fetchData();
  }, []);

  function renderAdventureResultCard({ item }: { item: AdventureResult }) {
    return (
      <AdventureResultCard adventureResult={item} />
    );
  }

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>History of Adventures</Title>
        <View style={styles.resultList}>
          <FlatList
            renderItem={renderAdventureResultCard}
            data={adventureHistory}
            keyExtractor={(item) => item.getId().toString()}
            alwaysBounceVertical={false}
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
  resultList: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default HistoryScreen;
