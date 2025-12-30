import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Pearl from "./ui/Pearl";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>This is your space.</Text>

      {/* Main Card */}
      <View style={styles.mainCard}>
        <Pearl width={60} />

        <Text style={styles.cardTitle}>Talk with your coach</Text>
        <Text style={styles.cardSub}>I'm here whenever you're ready.</Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryText}>Start a session</Text>
        </TouchableOpacity>
      </View>

      {/* Action Cards */}
      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.icon}>✦</Text>
          <Text style={styles.smallText}>Check in with yourself</Text>
        </View>
        <View style={styles.smallCard}>
          <Text style={styles.icon}>✦</Text>
          <Text style={styles.smallText}>Check in with yourself</Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.icon}>📖</Text>
          <Text style={styles.smallText}>Journal a thought</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6EE",
    padding: 24,
    paddingTop: 60,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6F6F6F",
  },

  subtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    marginBottom: 28,
  },

  mainCard: {
    backgroundColor: "#FFF",
    borderRadius: 26,
    padding: 24,
    alignItems: "center",
    marginBottom: 30,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
  },

  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#FFD38C",
    marginBottom: 14,
  },

  cardTitle: {
    fontSize: 16,
    color: "#6F6F6F",
    marginBottom: 6,
    marginTop: 24,
  },

  cardSub: {
    fontSize: 13,
    color: "#A5A5A5",
    marginBottom: 20,
    textAlign: "center",
  },

  primaryButton: {
    width: "100%",
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFEED6",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryText: {
    fontSize: 14,
    color: "#8F8F8F",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 18,
  },

  smallCard: {
    width: "47%",
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 3,
  },

  icon: {
    fontSize: 18,
    marginBottom: 10,
  },

  smallText: {
    fontSize: 13,
    color: "#8F8F8F",
    textAlign: "center",
  },
});

