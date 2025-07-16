import { StyleSheet, View, ScrollView, Image } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Title from "../../components/ui/Title";
import AdventureCard from "../../components/Adventure/AdventureCard";
import { adventureLands } from "../../helpers/adventure/adventureData";

function ChooseAdventureScreen() {
  return (
    <CustomBackground>
      <Title>Choose your Adventure</Title>
      <ScrollView alwaysBounceVertical={false}>
        <View style={styles.cardListContainer}>
          {adventureLands.map((adventure) => (
            <AdventureCard
              key={adventure.getId()}
              adventureId={adventure.getId()}
            />
          ))}
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  cardListContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
    gap: 25,
  },
});

export default ChooseAdventureScreen;
