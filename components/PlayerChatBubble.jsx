import { StyleSheet, View, Text } from "react-native";

import ChatBubble from "./ChatBubble";

function PlayerChatBubble({ children }) {
  return (
    <ChatBubble
      isOwnMessage={true}
      bubbleColor="#1084ff"
      tailColor="#1084ff"
      withTail={true}
      style={styles.chatBubble}
    >
      <Text style={styles.textOwn}>{children}</Text>
    </ChatBubble>
  );
}

const styles = StyleSheet.create({
  chatBubble: {
    padding: 10,
  },
  textOwn: {
    color: "white",
    fontFamily: "quicksand",
  },
});

export default PlayerChatBubble;
