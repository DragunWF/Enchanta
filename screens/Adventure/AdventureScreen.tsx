import { useState, useEffect, useContext, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import ChoiceButton from "../../components/Adventure/ChoiceButton";
import Title from "../../components/ui/Title";
import { AdventureContext } from "../../store/AdventureContext";
import {
  getAdventureInitialBotResponse,
  getAdventureBotResponse,
} from "../../helpers/adventure/adventureBot";
import { ScenarioImageSources } from "../../models/adventureLand";

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
        const initialResponse = await getAdventureInitialBotResponse(
          adventureContext,
          chosenAdventureLand
        );
        typeWriteText(0, initialResponse?.narrationText || "No text.");
        adventureContext.updateCurrentScenario(initialResponse?.tag || "calm");

        // @ts-ignore
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
  }, [chosenAdventureLand]);

  useEffect(() => {
    if (!selectedPlayerChoice) {
      return;
    }

    async function fetchAdventureResponse() {
      try {
        setIsLoading(true);
        const aiResponse = await getAdventureBotResponse(
          adventureContext,
          selectedPlayerChoice
        );
        if (aiResponse) {
          typeWriteText(0, aiResponse.narrationText);
          adventureContext.updateCurrentScenario(aiResponse.tag || "calm");

          // @ts-ignore
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

  const typeWriteText = useCallback((textIndex: number, fullText: string) => {
    if (textIndex >= fullText.length) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setNarrationText((prev) => fullText.slice(0, textIndex + 1));
      typeWriteText(textIndex + 1, fullText);
    }, 15);
  }, []);

  function handleChoiceSelection(choice: string) {
    setSelectedPlayerChoice(choice);
  }

  let content = (
    <>
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
    </>
  );
  if (isLoading) {
    content = (
      <View style={styles.fallbackContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  const currentScenarioImageSource =
    chosenAdventureLand?.getRandomScenarioImage(
      adventureContext.currentScenario as keyof ScenarioImageSources
    );

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Adventure on {chosenAdventureLand?.getTitle()}</Title>
        <Image
          style={styles.adventureImage}
          source={currentScenarioImageSource}
        />
        <ScrollView alwaysBounceVertical={false}>{content}</ScrollView>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  adventureImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
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
    paddingBottom: 40,
  },
});

export default AdventureScreen;
