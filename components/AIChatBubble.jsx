import { StyleSheet, View, Text } from "react-native";

import ChatBubble from "./ChatBubble";

function AIChatBubble({ children }) {
  return (
    <ChatBubble
      onPress={() => Alert.alert("Hi", "This is alert")}
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
