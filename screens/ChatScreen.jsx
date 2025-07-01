import { useContext, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";

import { ChatContext } from "../store/chatContext";
import Conversation from "../components/Conversation";
import { messageData } from "../helpers/dummyData";
import Toast from "react-native-toast-message";
import BotImage from "../components/BotImage";
import MessageInput from "../components/MessageInput";

function ChatScreen() {
  const [playerMessage, setPlayerMessage] = useState("");
  const chatContext = useContext(ChatContext);

  function playerMessageInputHandler(enteredMessage) {
    setPlayerMessage(enteredMessage);
  }

  function sendMessageHandler() {
    if (!isValidMessage()) {
      Toast.show({
        type: "info",
        text1: "Empty Message!",
        text2: "Your message is empty, enter something to chat.",
      });
    }

    // Implement adding of chat
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
        <BotImage />
      </View>
      <View style={styles.chatContainer}>
        <Conversation messageData={messageData} />
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
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});

export default ChatScreen;
