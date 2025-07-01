import { StyleSheet, Text } from "react-native";

import ChatBubble from "./ChatBubble";

function AIChatBubble({ children }) {
  return (
    <ChatBubble
      isOwnMessage={false}
      bubbleColor="lightgrey"
      withTail={true}
      style={styles.chatBubble}
    >
      <Text style={styles.text}>{children}</Text>
    </ChatBubble>
  );
}

const styles = StyleSheet.create({
  chatBubble: {
    padding: 10,
  },
  text: {
    color: "black",
    fontFamily: "quicksand",
  },
});

export default AIChatBubble;
