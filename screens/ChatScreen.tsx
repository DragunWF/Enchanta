import { useContext, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";

import { ChatContext } from "../store/chatContext";
import Conversation from "../components/Conversation";
import Toast from "react-native-toast-message";
import BotImage from "../components/BotImage";
import MessageInput from "../components/MessageInput";
import { getFullPrompt, getBotResponseMessage } from "../helpers/chatbot";
import { BotContext } from "../store/botContext";

function ChatScreen() {
  const [playerMessage, setPlayerMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const chatContext = useContext(ChatContext);
  const botContext = useContext(BotContext);

  console.log(getFullPrompt(botContext, chatContext));

  function playerMessageInputHandler(enteredMessage: string) {
    setPlayerMessage(enteredMessage);
  }

  async function sendMessageHandler() {
    if (!isValidMessage()) {
      Toast.show({
        type: "info",
        text1: "Empty Message!",
        text2: "Your message is empty, enter something to chat.",
      });
    }

    chatContext.addMessage(playerMessage, true);
    setPlayerMessage("");

    try {
      setIsLoading(true);
      const botResponse = await getBotResponseMessage(playerMessage);
      chatContext.addMessage(botResponse, false);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Error!",
        text2:
          "An unexpected error occurred while the bot was trying to respond to your message.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  function isValidMessage() {
    return playerMessage.length > 0;
  }

  return (
    <KeyboardAvoidingView
      style={styles.rootContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.botImageContainer}>
        <BotImage onMoodChange={() => {}} />
      </View>
      <View style={styles.chatContainer}>
        <Conversation messageData={chatContext.messageHistory} />
      </View>
      <MessageInput
        message={playerMessage}
        onSendMessage={sendMessageHandler}
        onChange={playerMessageInputHandler}
      />
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
  chatContainer: {
    flex: 2,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
