import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import MicIcon from "./decor/MicIcon";


const SendIcon = ({ color }: { color: string }) => (
  <View
    style={{
      width: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 16, color }}>➤</Text>
  </View>
);

const ChatMessage = ({ message, isUser }: { message: string; isUser: boolean }) => (
  <View
    style={[
      styles.messageContainer,
      isUser ? styles.userMessageContainer : styles.coachMessageContainer,
    ]}
  >
    <View
      style={[
        styles.messageBubble,
        isUser ? styles.userBubble : styles.coachBubble,
      ]}
    >
      <Text style={[styles.messageText, isUser && styles.userMessageText]}>
        {message}
      </Text>
    </View>
  </View>
);

const TypingIndicator = () => (
  <View style={styles.messageContainer}>
    <View style={styles.pearlAvatar}>
      <Pearl width={40} />
    </View>
    <View style={styles.typingBubble}>
      <View style={styles.typingDots}>
        <View style={[styles.dot, styles.dot1]} />
        <View style={[styles.dot, styles.dot2]} />
        <View style={[styles.dot, styles.dot3]} />
      </View>
    </View>
  </View>
);

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there. I'm here whenever you're ready to talk. How are you feeling today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I hear you. That sounds really challenging. Would you like to tell me more about what's on your mind?",
        "Thank you for sharing that with me. Your feelings are valid. How long have you been experiencing this?",
        "I'm here with you. Take your time. What would help you feel supported right now?",
        "That takes courage to share. I appreciate your openness. How are you coping with this?",
        "I understand. It's okay to feel this way. What do you need most in this moment?",
      ];
      const aiMessage = {
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <BgGlow />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.coachIcon}>
            <View style={styles.headerDot} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Your Support Coach</Text>
          <View style={styles.statusContainer}>
            <View style={styles.onlineDot} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
        ))}

        {isTyping && <TypingIndicator />}
      </ScrollView>

      {/* Input area */}
      <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.micButton}>
            <MicIcon />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Type or speak what's on you..."
            placeholderTextColor="#B3B3B3"
            multiline
            maxLength={500}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={!inputValue.trim()}
          >
            <SendIcon color={inputValue.trim() ? "#FFB366" : "#D0D0D0"} />
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    gap: 12,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.05)",
  },

  coachIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFF1C9",
    alignItems: "center",
    justifyContent: "center",
  },
  headerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F6C76D",
  },

  headerTextContainer: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6F6F6F",
    marginBottom: 4,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFB366",
    marginRight: 6,
  },

  statusText: {
    fontSize: 12,
    color: "#9B9B9B",
  },

  messagesContainer: {
    flex: 1,
  },

  messagesContent: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  messageContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "flex-start",
  },

  userMessageContainer: {
    flexDirection: "row-reverse",
  },

  coachMessageContainer: {
    flexDirection: "row",
  },

  pearlAvatar: {
    marginRight: 12,
  },

  messageBubble: {
    maxWidth: "75%",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  userBubble: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  coachBubble: {
    backgroundColor: "transparent",
  },

  messageText: {
    fontSize: 14,
    color: "#6F6F6F",
    lineHeight: 20,
  },

  userMessageText: {
    color: "#6F6F6F",
  },

  typingBubble: {
    backgroundColor: "transparent",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  typingDots: {
    flexDirection: "row",
    gap: 4,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#9B9B9B",
  },

  dot1: {
    opacity: 0.4,
  },

  dot2: {
    opacity: 0.6,
  },

  dot3: {
    opacity: 0.8,
  },

  inputContainer: {
    paddingHorizontal: 24,
    paddingBottom: 30,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  micButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginRight: 4,
    backgroundColor: "#FEF3C660",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#6F6F6F",
    maxHeight: 100,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginLeft: 4,
    backgroundColor: "#FEF3C660",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
});

export default ChatScreen;
