import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";

const OPTIONS = [
  { label: "Loneliness &\nEmotional Support", bg: "#FCECEC" },
  { label: "Stress, Burnout & Anxiety", bg: "#FFF6D9" },
  { label: "Relationships & Intimacy", bg: "#FCECEC" },
  { label: "Personal Growth & Clarity", bg: "#FFF6D9" },
  { label: "Body & Wellness Questions", bg: "#FFF9ED" },
];

const SupportOptions = () => {
  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* content */}
      <View style={styles.content}>
        {/* pearl */}
        <Pearl width={100} />

        {/* heading */}
        <Text style={styles.title}>What do you need support with today?</Text>
        <Text style={styles.subtitle}>Choose the area that feels right.</Text>

        {/* options */}
        <View style={styles.optionsWrapper}>
          {OPTIONS.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              style={[styles.option, { backgroundColor: item.bg }]}
              onPress={() => router.push("/chat")}
            >
              <Text style={styles.optionText}>{item.label}</Text>
              
              <View style={styles.dot} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity>
          <Text style={styles.footerText}>I'm not sure — help me choose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6F6F6F",
    textAlign: "center",
    marginTop: 22,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    marginBottom: 30,
  },

  optionsWrapper: {
    width: "100%",
    gap: 14,
    marginBottom: 26,
  },

  option: {
    width: "100%",
    minHeight: 56,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 1,
  },

  optionText: {
    fontSize: 14,
    color: "#6F6F6F",
    lineHeight: 18,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F6C76D",
  },

  footerText: {
    fontSize: 12,
    color: "#B3B3B3",
    marginTop: 10,
  },
});  

export default SupportOptions;
