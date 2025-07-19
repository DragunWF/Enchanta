import { StyleSheet, View } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import AdventureResultCard from "../../components/Adventure/AdventureResultCard";

function HistoryScreen() {
  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>History of Adventures</Title>
        <View style={styles.resultList}>{/* <AdventureResultCard /> */}</View>
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
