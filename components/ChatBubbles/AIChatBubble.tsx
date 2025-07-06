import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

import ChatBubble from "./ChatBubble";
import { chatBubbleColors } from "../../constants/colors";

interface AIChatBubbleProps {
  children: ReactNode;
}

function AIChatBubble({ children }: AIChatBubbleProps) {
  return (
    <ChatBubble
      isOwnMessage={false}
      bubbleColor={chatBubbleColors.bot}
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
