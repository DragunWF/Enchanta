import { useState, useEffect, useContext, useRef } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import ChoiceButton from "../../components/Adventure/ChoiceButton";
import Title from "../../components/ui/Title";
import { AdventureContext } from "../../store/AdventureContext";
import { getAdventureInitialBotResponse } from "../../helpers/adventure/adventureBot";

function AdventureScreen() {
  const adventureContext = useContext(AdventureContext);
  const [narrationText, setNarrationText] = useState<string>("");
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const [selectedPlayerChoice, setSelectedPlayerChoice] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chosenAdventureLand = adventureContext.selectedAdventureLand;
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    async function fetchInitialResponse() {
      try {
        setIsLoading(true);
        const initialResponse = getAdventureInitialBotResponse(
          adventureContext,
          chosenAdventureLand
        );
        console.log("Initial AI Response:", initialResponse);
        typeWriteText(0, initialResponse?.narrationText || "No text.");
        setPlayerChoices(initialResponse?.choices || []);
      } catch (error) {
        console.error("Error fetching initial bot response:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchInitialResponse();

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [adventureContext, chosenAdventureLand]);

  useEffect(() => {
    if (!selectedPlayerChoice) {
      return;
    }

    async function fetchAdventureResponse() {
      try {
        setIsLoading(true);
        const aiResponse = await getAdventureInitialBotResponse(
          adventureContext,
          chosenAdventureLand
        );
        if (aiResponse) {
          console.log("AI Response:", aiResponse);
          typeWriteText(0, aiResponse.narrationText);
          setPlayerChoices(aiResponse?.choices || []);
        } else {
          console.error("Failed to extract AI response.");
        }
      } catch (error) {
        console.error("Error fetching adventure response:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAdventureResponse();
  }, [selectedPlayerChoice]);

  function typeWriteText(textIndex: number, fullText: string) {
    if (textIndex >= fullText.length) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setNarrationText(fullText.slice(0, textIndex + 1));
      typeWriteText(textIndex + 1, fullText);
    }, 15);
  }

  function handleChoiceSelection(choice: string) {
    setSelectedPlayerChoice(choice);
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

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
