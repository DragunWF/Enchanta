import { useContext, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import Toast from "react-native-toast-message";

import Conversation from "../../components/ChatScreen/Conversation";
import BotImage from "../../components/ChatScreen/BotImage";
import MessageInput from "../../components/ChatScreen/MessageInput";
import CustomBackground from "../../components/ui/CustomBackground";
import { ChatContext } from "../../store/ChatContext";
import { getBotResponseMessage } from "../../helpers/chatbot/chatbot";
import { BotContext } from "../../store/BotContext";

interface ChatScreenProps {
  isImageVisible: boolean;
}

function ChatScreen({ isImageVisible }: ChatScreenProps) {
  const [playerMessage, setPlayerMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatContext = useContext(ChatContext);
  const botContext = useContext(BotContext);

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
      return;
    }

    chatContext.addMessage(playerMessage, true);
    setPlayerMessage("");

    try {
      setIsLoading(true);
      const botResponse = await getBotResponseMessage(
        botContext,
        chatContext,
        playerMessage
      );
      chatContext.addMessage(botResponse, false);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Error!",
        text2:
          "An unexpected error occurred while the bot was trying to respond to your message.",
      });
      console.error("Error in sendMessageHandler:", err);
    } finally {
      setIsLoading(false);
    }
  }

  function isValidMessage() {
    return playerMessage.trim().length > 0;
  }

  return (
    <CustomBackground>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        {isImageVisible && (
          <View style={styles.botImageContainer}>
            <BotImage moodName={botContext.mood} />
          </View>
        )}
        <View style={styles.chatContainer}>
          <Conversation messageData={chatContext.messageHistory} />
        </View>
        <MessageInput
          message={playerMessage}
          onSendMessage={sendMessageHandler}
          onChange={playerMessageInputHandler}
        />
      </KeyboardAvoidingView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
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
