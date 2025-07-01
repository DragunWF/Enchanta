import { StyleSheet, FlatList } from "react-native";
import PlayerChatBubble from "./PlayerChatBubble";
import AIChatBubble from "./AIChatBubble";

function Conversation({ messageData }) {
  function renderChatBubble(itemData) {
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
      keyExtractor={(item) => item.id}
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
