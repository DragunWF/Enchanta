import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";

import ChatBubble from "../components/ChatBubble";

function ChatScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.botImageContainer}>
        <Image
          source={require("../assets/images/curious-mage.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.chatContainer}>
        <ScrollView>
          <ChatBubble
            isOwnMessage={true}
            bubbleColor="#1084ff"
            tailColor="#1084ff"
            withTail={true}
            style={styles.chatBubble}
          >
            <Text style={styles.textOwn}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              atque repudiandae alias nisi aut? Ut perferendis similique non
              vel! Blanditiis nihil enim culpa ex numquam commodi saepe? Non, ex
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              atque repudiandae alias nisi aut? Ut perferendis similique non
              vel! Blanditiis nihil enim culpa ex numquam commodi saepe? Non, ex
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
            <Text style={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur perferendis hic, veritatis, non cum veniam iusto
              consequuntur rem porro quasi, quod alias neque fuga? Quaerat
              distinctio et voluptas earum. Esse quisquam magnam officia velit,
              laborum, minus dolore unde nemo sit nam pariatur dolor nobis
              cupiditate excepturi aliquam similique totam ut!
            </Text>
          </ChatBubble>
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your message..." />
        <Button title="Send" />
      </View>
    </View>
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
  image: {
    width: "90%",
    height: 250,
    borderRadius: 15,
  },
  chatContainer: {
    flex: 2,
    marginTop: 10,
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
  inputContainer: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "lightgray",
    borderRadius: 25,
    justifyContent: "space-between",
  },
});

export default ChatScreen;
