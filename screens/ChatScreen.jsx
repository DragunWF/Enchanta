import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import PlayerChatBubble from "../components/PlayerChatBubble";
import AIChatBubble from "../components/AIChatBubble";

function ChatScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.rootContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.botImageContainer}>
        <Image
          source={require("../assets/images/curious-mage.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.chatContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <PlayerChatBubble>
            Hello there! I'm ready for the next quest.
          </PlayerChatBubble>
          <AIChatBubble>
            Welcome back, adventurer! The ancient scrolls speak of a new
            challenge awaiting you in the Whispering Woods. Are you prepared?
          </AIChatBubble>
          <AIChatBubble>
            The Whispering Woods, huh? Sounds intriguing! What kind of challenge
            are we talking about this time? Last time it was goblins, and my
            sword arm is still a bit sore.
          </AIChatBubble>
          <AIChatBubble>
            Fear not, the goblins have retreated for now. This quest involves
            solving riddles left by the forest spirits to uncover a hidden
            artifact. It requires more wit than brute strength.
          </AIChatBubble>
          <PlayerChatBubble>
            Riddles, excellent! My brain could use a workout. Lead the way, AI.
            I'm up for the task!
          </PlayerChatBubble>
          <AIChatBubble>
            Follow the path winding north from your current location. The first
            riddle awaits you beneath the oldest oak tree. Good luck!
          </AIChatBubble>
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your message..."
          style={styles.textInput}
        />
        <Button title="Send" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  botImageContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: 225,
    borderRadius: 15,
  },
  chatContainer: {
    flex: 2,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "lightgray",
    borderRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});

export default ChatScreen;
