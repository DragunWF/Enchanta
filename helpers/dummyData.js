import Message from "../models/message";

export const messageData = [
  new Message(1, "Hey! How's it going?", true),
  new Message(
    2,
    "Oh hey! I'm doing great, thanks for asking. How about you?",
    false
  ),
  new Message(
    3,
    "Pretty good! Just finished that project I was telling you about",
    true
  ),
  new Message(
    4,
    "That's awesome! The one you've been working on for weeks?",
    false
  ),
  new Message(
    5,
    "Yeah, exactly! It was challenging but really rewarding",
    true
  ),
  new Message(
    6,
    "I bet! You put so much effort into it. How did it turn out?",
    false
  ),
  new Message(7, "Better than I expected honestly. The client loved it", true),
  new Message(8, "That's fantastic! You should celebrate 🎉", false),
  new Message(9, "I think I will! Want to grab dinner later?", true),
  new Message(
    10,
    "Absolutely! I know just the place. 7 PM work for you?",
    false
  ),
  new Message(11, "Perfect! See you then", true),
  new Message(12, "Can't wait! See you at 7", false),
];
