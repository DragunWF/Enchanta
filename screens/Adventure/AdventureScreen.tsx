import { useState, useEffect, useContext, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import Toast from "react-native-toast-message";
import type { StackNavigationProp } from "@react-navigation/stack";

import CustomBackground from "../../components/ui/CustomBackground";
import Card from "../../components/ui/Card";
import CardText from "../../components/ui/CardText";
import ChoiceButton from "../../components/Adventure/ChoiceButton";
import Title from "../../components/ui/Title";
import CustomButton from "../../components/ui/CustomButton";
import { AdventureContext } from "../../store/AdventureContext";
import {
  getAdventureInitialBotResponse,
  getAdventureBotResponse,
} from "../../helpers/adventure/adventureBot";
import { ScenarioImageSources } from "../../models/adventureLand";
import { mainColors } from "../../constants/colors";

interface AdventureScreenProps {
  navigation: StackNavigationProp<any>;
}

function AdventureScreen({ navigation }: AdventureScreenProps) {
  const adventureContext = useContext(AdventureContext);

  const [narrationText, setNarrationText] = useState<string>("");
  const [isNarrationComplete, setIsNarrationComplete] =
    useState<boolean>(false); // Makes sure that buttons only appear after the narration text is displayed fully
  const [playerChoices, setPlayerChoices] = useState<string[]>([]);
  const [selectedPlayerChoice, setSelectedPlayerChoice] = useState<
    string | null
  >(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Changed from useRef to useState
  const [currentScenarioImage, setCurrentScenarioImage] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  const gameOverSummary = useRef<string>("");
  const timeoutRef = useRef<number | null>(null);
  const chosenAdventureLand = adventureContext.selectedAdventureLand;

  const typeWriteText = useCallback((textIndex: number, fullText: string) => {
    if (textIndex >= fullText.length) {
      setIsNarrationComplete(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setNarrationText((prev) => fullText.slice(0, textIndex + 1));
      typeWriteText(textIndex + 1, fullText);
    }, 15);
  }, []);

  useEffect(() => {
    async function fetchInitialResponse() {
      try {
        setIsLoading(true);
        const initialResponse = await getAdventureInitialBotResponse(
          adventureContext,
          chosenAdventureLand
        );
        const scenario = initialResponse?.tag || "calm";
        typeWriteText(0, initialResponse?.narrationText || "No text.");
        adventureContext.updateCurrentScenario(scenario);
        changeScenarioImage(scenario);

        // @ts-ignore
        setPlayerChoices(initialResponse?.choices || []);
      } catch (error) {
        console.error("Error fetching initial bot response:", error);
        Toast.show({
          type: "error",
          text1: "Error in Initialization",
          text2:
            "An unexpected error occurred while trying to start your adventure!",
        });
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
          const scenario = aiResponse.tag || "calm";
          adventureContext.updateCurrentScenario(scenario);
          changeScenarioImage(scenario);

          // @ts-ignore
          setPlayerChoices(aiResponse?.choices || []);
          setIsGameOver(aiResponse.isGameover);

          if (aiResponse.isGameover) {
            gameOverSummary.current = aiResponse.gameOverSummary;
            adventureContext.clearAdventureLogs(); // Resets the prompt history
          }
        } else {
          console.error("Failed to extract AI response.");
          Toast.show({
            type: "error",
            text1: "Error",
            text2:
              "An unexpected error occurred while trying to load the next adventure narration!",
          });
        }
      } catch (error) {
        console.error("Error fetching adventure response:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAdventureResponse();
  }, [selectedPlayerChoice]);

  function changeScenarioImage(scenario: string) {
    setCurrentScenarioImage(
      // @ts-ignore
      chosenAdventureLand?.getRandomScenarioImage(
        (isGameOver ? "aftermath" : scenario) as keyof ScenarioImageSources
      )
    );
  }

  function choiceSelectionHandler(choice: string) {
    setIsNarrationComplete(false); // Make buttons disappear until narration text is done typing
    setSelectedPlayerChoice(choice);
  }

  function seeResultsHandler() {
    navigation.replace("Results", { gameOverSummary: gameOverSummary.current });
  }

  let content = (
    <>
      <Card style={styles.narrationCard}>
        <CardText>{narrationText}</CardText>
      </Card>
      {isNarrationComplete && (
        <View style={styles.buttonListContainer}>
          {!isGameOver ? (
            playerChoices.map((choice, index) => (
              <ChoiceButton
                key={index}
                onSelectChoice={choiceSelectionHandler}
                label={choice}
              />
            ))
          ) : (
            <CustomButton
              style={styles.gameOverButton}
              onPress={seeResultsHandler}
            >
              See Results Screen
            </CustomButton>
          )}
        </View>
      )}
    </>
  );
  if (isLoading) {
    content = (
      <View style={styles.fallbackContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <CustomBackground>
      <View style={styles.rootContainer}>
        <Title>Adventure on {chosenAdventureLand?.getTitle()}</Title>
        {/* Changed from currentScenarioImage.current to currentScenarioImage */}
        <Image style={styles.adventureImage} source={currentScenarioImage} />
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
  gameOverButton: {
    backgroundColor: mainColors.primary500,
    borderColor: mainColors.primary700,
  },
});

export default AdventureScreen;
