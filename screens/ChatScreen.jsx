import { StyleSheet, View, Text, Alert } from "react-native";

import ChatBubble from "../components/ChatBubble";

function ChatScreen() {
  return (
    <View style={styles.chatContainer}>
      <ChatBubble
        isOwnMessage={true}
        bubbleColor="#1084ff"
        tailColor="#1084ff"
        withTail={true}
        style={styles.chatBubble}
      >
        <Text style={styles.textOwn}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque
          repudiandae alias nisi aut? Ut perferendis similique non vel!
          Blanditiis nihil enim culpa ex numquam commodi saepe? Non, ex
          recusandae.
        </Text>
      </ChatBubble>
      <ChatBubble
        onPress={() => Alert.alert("Hi", "This is alert")}
        isOwnMessage={false}
        bubbleColor="lightgrey"
        withTail={true}
        style={styles.chatBubble}
      >
        <Text style={styles.text}>hi.</Text>
      </ChatBubble>
      <ChatBubble
        isOwnMessage={true}
        bubbleColor="#1084ff"
        tailColor="#1084ff"
        withTail={true}
        style={styles.chatBubble}
      >
        <Text style={styles.textOwn}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque
          repudiandae alias nisi aut? Ut perferendis similique non vel!
          Blanditiis nihil enim culpa ex numquam commodi saepe? Non, ex
          recusandae.
        </Text>
      </ChatBubble>
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  chatBubble: {
    padding: 10,
  },
  text: {
    color: "black",
    fontFamily: "quicksand",
  },
  textOwn: {
    color: "white",
    fontFamily: "quicksand",
  },
});

export default ChatScreen;
