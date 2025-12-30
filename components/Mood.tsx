import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const moods = [
  { label: "Calm", color: "#E6F6FF", icon: "≈" },
  { label: "Anxious", color: "#FFF2C6", icon: "⋯" },
  { label: "Tired", color: "#EEE8FF", icon: "☾" },
  { label: "Heavy", color: "#F0F0F0", icon: "↓" },
  { label: "Hopeful", color: "#FFE6E6", icon: "↑" },
];

export default function CheckInScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>How are you feeling right now?</Text>
        <Text style={styles.subtitle}>There's no right or wrong answer.</Text>

        {/* Mood grid */}
        <View style={styles.moodGrid}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood.label}
              style={[
                styles.moodItem,
                { backgroundColor: mood.color },
                selectedMood === mood.label && styles.selectedMood,
              ]}
              onPress={() => setSelectedMood(mood.label)}
            >
              <Text style={styles.moodIcon}>{mood.icon}</Text>
              <Text style={styles.moodText}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Optional note */}
        <TextInput
          placeholder="Would you like to add a few words?"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          value={note}
          onChangeText={setNote}
          multiline
        />
      </View>

      {/* Continue button */}
      <TouchableOpacity style={styles.button} disabled={!selectedMood}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6EE",
    padding: 20,
    paddingTop: 60,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 28,
    padding: 22,
    marginBottom: 30,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6F6F6F",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    marginBottom: 22,
  },

  moodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  moodItem: {
    width: "30%",
    height: 78,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  selectedMood: {
    borderWidth: 1.5,
    borderColor: "#FFD38C",
  },

  moodIcon: {
    fontSize: 18,
    marginBottom: 6,
    color: "#7A7A7A",
  },

  moodText: {
    fontSize: 12,
    color: "#7A7A7A",
  },

  input: {
    backgroundColor: "#FAFAFA",
    borderRadius: 18,
    padding: 16,
    fontSize: 13,
    color: "#6F6F6F",
    minHeight: 60,
  },

  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFEED6",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 14,
    color: "#8F8F8F",
    fontWeight: "500",
  },
});
  