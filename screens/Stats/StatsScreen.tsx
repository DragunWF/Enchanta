import { StyleSheet, View, Text } from "react-native";

import Title from "../../components/ui/Title";
import CustomBackground from "../../components/ui/CustomBackground";

function StatsScreen() {
  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Usage Statistics</Title>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default StatsScreen;
