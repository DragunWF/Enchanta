import { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import ChoiceButton from "../../components/Adventure/ChoiceButton";
import { AdventureContext } from "../../store/AdventureContext";
import { getAdventureInitialBotResponse } from "../../helpers/adventure/adventureBot";
import Title from "../../components/ui/Title";

function AdventureScreen() {
  const adventureContext = useContext(AdventureContext);
  const [narrationText, setNarrationText] = useState<string>("");
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const chosenAdventureLand = adventureContext.selectedAdventureLand;
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    async function fetchInitialResponse() {
      try {
        const initialResponse = {
          narrationText:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusantium magni quidem aut, animi nihil rerum quam qui quasi perspiciatis reprehenderit ab ratione deleniti tempore aliquid. Atque, itaque. Est, quisquam ullam! Assumenda esse aperiam voluptatem atque tenetur impedit possimus labore nostrum, maxime doloremque. Quas beatae molestiae reprehenderit accusamus nisi sit!",
          choices: [
            "Explore the forest",
            "Climb the mountain",
            "Visit the village",
            "Rest at the camp",
          ],
        };
        console.log("Initial AI Response:", initialResponse);
        typeWriteText(0, initialResponse.narrationText);
        setPlayerChoices(initialResponse?.choices || []);
      } catch (error) {
        console.error("Error fetching initial bot response:", error);
      }
    }

    function typeWriteText(textIndex: number, fullText: string) {
      if (textIndex >= fullText.length) {
        return;
      }

      timeoutRef.current = setTimeout(() => {
        setNarrationText(fullText.slice(0, textIndex + 1));
        typeWriteText(textIndex + 1, fullText);
      }, 25);
    }

    fetchInitialResponse();

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [adventureContext, chosenAdventureLand]);

  function handleChoiceSelection(choice: string) {}

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Adventure on {chosenAdventureLand?.getTitle()}</Title>
        <ScrollView alwaysBounceVertical={false}>
          <Card style={styles.narrationCard}>
            <CardText>{narrationText}</CardText>
          </Card>
          <View style={styles.buttonListContainer}>
            {playerChoices.map((choice, index) => (
              <ChoiceButton
                key={index}
                onSelectChoice={handleChoiceSelection}
                label={choice}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  narrationCard: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonListContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginTop: 20,
  },
});

export default AdventureScreen;
