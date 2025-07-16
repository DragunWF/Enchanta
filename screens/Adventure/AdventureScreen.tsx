import { useState, useLayoutEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import { AdventureContext } from "../../store/AdventureContext";
import { getAdventureInitialBotResponse } from "../../helpers/adventure/adventureBot";

function AdventureScreen() {
  const adventureContext = useContext(AdventureContext);
  const [narrationText, setNarrationText] = useState<string>("");
  const chosenAdventureLand = adventureContext.selectedAdventureLand;

  useLayoutEffect(() => {
    async function fetchInitialResponse() {
      try {
        const initialResponse = await getAdventureInitialBotResponse(
          adventureContext,
          chosenAdventureLand
        );
        console.log("Initial AI Response:", initialResponse);
        setNarrationText(initialResponse);
      } catch (error) {
        console.error("Error fetching initial bot response:", error);
      }
    }

    fetchInitialResponse();
  }, []);

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Card>
          <CardText>{narrationText}</CardText>
        </Card>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AdventureScreen;
