import { useRef, useEffect } from "react";
import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import PlayerChatBubble from "./PlayerChatBubble";
import AIChatBubble from "./AIChatBubble";

import Message from "../models/message";

interface ConversationProps {
  messageData: Message[];
}

function Conversation({ messageData }: ConversationProps) {
  const flatListRef = useRef<FlatList>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messageData.length > 0) {
      // Small delay to ensure the new message is rendered before scrolling
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messageData.length]);

  function renderChatBubble(itemData: ListRenderItemInfo<Message>) {
    const message = itemData.item;
    if (message.isPlayer()) {
      return <PlayerChatBubble>{message.getContent()}</PlayerChatBubble>;
    }
    return <AIChatBubble>{message.getContent()}</AIChatBubble>;
  }

  return (
    <FlatList
      ref={flatListRef}
      data={messageData}
      renderItem={renderChatBubble}
      keyExtractor={(item: Message) => item.getId().toString()}
      alwaysBounceVertical={false}
      style={styles.list}
      // This ensures the list starts at the bottom when first loaded
      onContentSizeChange={() =>
        flatListRef.current?.scrollToEnd({ animated: false })
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});

export default Conversation;
