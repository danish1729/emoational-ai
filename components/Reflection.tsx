import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Pearl = ({ size = 50 }) => (
  <View
    style={[
      styles.pearl,
      { width: size, height: size, borderRadius: size / 2 },
    ]}
  >
    <View
      style={[
        styles.pearlInner,
        { width: size / 3, height: size / 3, borderRadius: size / 6 },
      ]}
    />
  </View>
);

const EmotionButton = ({ label, color, selected, onPress }: { label: string; color: string; selected: boolean; onPress: () => void }) => (
  <TouchableOpacity
    style={[styles.emotionButton, selected && styles.emotionButtonSelected]}
    onPress={onPress}
  >
    <View style={[styles.emotionDot, { backgroundColor: color }]} />
    <Text style={styles.emotionLabel}>{label}</Text>
  </TouchableOpacity>
);

const ReflectionScreen = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [saveReflection, setSaveReflection] = useState<boolean | null>(null);

  const emotions = [
    { label: "Calm", color: "#7DD3C0" },
    { label: "Worried", color: "#FFD88A" },
    { label: "Relieved", color: "#A8C5E8" },
    { label: "Tired", color: "#C5B3E6" },
    { label: "Hopeful", color: "#F5C4C4" },
  ];
  const scrollViewRef = React.useRef<ScrollView>(null);

  return (
    <View style={styles.wrapper}>
      {/* Background glows */}
      <View style={styles.bgGlow1} />
      <View style={styles.bgGlow2} />

        {/* Header */}
        <Text style={styles.title}>Take a moment to breathe</Text>
        <Text style={styles.subtitle}>
          Here's a gentle reflection from our{"\n"}conversation.
        </Text>

        {/* Pearl */}
        <View style={styles.pearlContainer}>
          <Pearl size={50} />
        </View>

        {/* Reflection Card */}
        <View style={styles.card}>
          <Text style={styles.cardText}>
            It sounds like today was emotionally heavy, but you showed courage
            by sharing. Let's keep moving gently.
          </Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>How do you feel now?</Text>

        {/* Emotion Buttons */}
        <View style={styles.emotionsContainer}>
          <View style={styles.emotionRow}>
            {emotions.slice(0, 3).map((emotion, index) => (
              <EmotionButton
                key={index}
                label={emotion.label}
                color={emotion.color}
                selected={selectedEmotion === emotion.label}
                onPress={() => setSelectedEmotion(emotion.label)}
              />
            ))}
          </View>
          <View style={styles.emotionRow}>
            {emotions.slice(3).map((emotion, index) => (
              <EmotionButton
                key={index}
                label={emotion.label}
                color={emotion.color}
                selected={selectedEmotion === emotion.label}
                onPress={() => setSelectedEmotion(emotion.label)}
              />
            ))}
          </View>
        </View>

        {/* Save Question */}
        <Text style={styles.saveQuestion}>
          Would you like to save this{"\n"}reflection?
        </Text>

        {/* Yes/No Buttons */}
        <View style={styles.yesNoContainer}>
          <TouchableOpacity
            style={[
              styles.yesButton,
              saveReflection === true && styles.yesButtonSelected,
            ]}
            onPress={() => setSaveReflection(true)}
          >
            <Text
              style={[
                styles.yesButtonText,
                saveReflection === true && styles.yesButtonTextSelected,
              ]}
            >
              Yes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.noButton,
              saveReflection === false && styles.noButtonSelected,
            ]}
            onPress={() => setSaveReflection(false)}
          >
            <Text style={styles.noButtonText}>No</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <LinearGradient
          colors={["#FFE9A8", "#FFD0D0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.continueButton}
        >
          <TouchableOpacity style={styles.continueButtonInner}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Return to Home */}
        <TouchableOpacity>
          <Text style={styles.returnText}>Return to home</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF9F0",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },

  bgGlow1: {
    position: "absolute",
    top: 0,
    left: "25%",
    width: 200,
    height: 200,
    backgroundColor: "#FFECD2",
    borderRadius: 100,
    opacity: 0.4,
  },

  bgGlow2: {
    position: "absolute",
    top: 80,
    right: "25%",
    width: 150,
    height: 150,
    backgroundColor: "#FFE4E1",
    borderRadius: 75,
    opacity: 0.3,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F6F6F",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 32,
  },

  pearlContainer: {
    marginBottom: 32,
  },

  pearl: {
    backgroundColor: "#FFD88A",
    justifyContent: "center",
    alignItems: "center",
  },

  pearlInner: {
    backgroundColor: "#FFE8B0",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },

  cardText: {
    fontSize: 14,
    color: "#6F6F6F",
    lineHeight: 20,
    textAlign: "center",
  },

  question: {
    fontSize: 14,
    color: "#6F6F6F",
    textAlign: "center",
    marginBottom: 20,
  },

  emotionsContainer: {
    width: "100%",
    marginBottom: 32,
  },

  emotionRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    gap: 12,
  },

  emotionButton: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    minWidth: 90,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },

  emotionButtonSelected: {
    backgroundColor: "rgba(255, 248, 240, 0.9)",
    shadowOpacity: 0.06,
  },

  emotionDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 6,
  },

  emotionLabel: {
    fontSize: 13,
    color: "#6F6F6F",
  },

  saveQuestion: {
    fontSize: 14,
    color: "#6F6F6F",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },

  yesNoContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },

  yesButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },

  yesButtonSelected: {
    backgroundColor: "#FFEAA8",
    shadowOpacity: 0.08,
  },

  yesButtonText: {
    fontSize: 14,
    color: "#9B9B9B",
    fontWeight: "500",
  },

  yesButtonTextSelected: {
    color: "#8E8E8E",
  },

  noButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },

  noButtonSelected: {
    backgroundColor: "#FFE4E1",
  },

  noButtonText: {
    fontSize: 14,
    color: "#9B9B9B",
    fontWeight: "500",
  },

  continueButton: {
    width: "100%",
    borderRadius: 30,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  continueButtonInner: {
    paddingVertical: 16,
    alignItems: "center",
  },

  continueButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#8E8E8E",
  },

  returnText: {
    fontSize: 13,
    color: "#B3B3B3",
    textAlign: "center",
  },
});

export default ReflectionScreen;