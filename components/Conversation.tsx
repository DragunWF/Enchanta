import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import PlayerChatBubble from "./PlayerChatBubble";
import AIChatBubble from "./AIChatBubble";

import Message from "../models/message";

interface ConversationProps {
  messageData: Message[];
}

function Conversation({ messageData }: ConversationProps) {
  function renderChatBubble(itemData: ListRenderItemInfo<Message>) {
    const message = itemData.item;
    if (message.isPlayer()) {
      return <PlayerChatBubble>{message.getContent()}</PlayerChatBubble>;
    }
    return <AIChatBubble>{message.getContent()}</AIChatBubble>;
  }

  return (
    <FlatList
      data={messageData}
      renderItem={renderChatBubble}
      keyExtractor={(item: Message) => item.getId().toString()}
      alwaysBounceVertical={false}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});

export default Conversation;
