import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";

const FindingSupport = () => {
  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* content */}
      <View style={styles.content}>
        {/* heading */}
        <Text style={styles.title}>Finding the right support for you…</Text>

        <Text style={styles.subtitle}>
          Based on what you shared, I'm{"\n"}
          preparing a coach who{"\n"}
          understands.
        </Text>

        {/* center pearl */}
        <View style={styles.pearlWrapper}>
          <Pearl width={100} />
        </View>

        {/* coach card */}
        <View style={styles.coachCard}>
          <View style={styles.coachIcon}>
            <View style={styles.dot} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.coachTitle}>Emotional Support{"\n"}Coach</Text>
            <Text style={styles.coachSubtitle}>
              Specialized in what{"\n"}you need today.
            </Text>
          </View>
        </View>

        {/* footer */}
        <TouchableOpacity>
          <Text style={styles.footerText}>Skip matching</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 90,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6F6F6F",
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 60,
  },

  pearlWrapper: {
    marginBottom: 60,
  },

  coachCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 14,
    padding: 14,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255)",
    elevation: 2,

    marginBottom: 50,
  },

  coachIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFF1C9",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F6C76D",
  },

  coachTitle: {
    fontSize: 18,
    color: "#6F6F6F",
    fontWeight: "500",
    marginBottom: 8,
    lineHeight: 18,
  },

  coachSubtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    lineHeight: 16,
  },

  footerText: {
    fontSize: 12,
    color: "#B3B3B3",
  },
});
  
export default FindingSupport;
