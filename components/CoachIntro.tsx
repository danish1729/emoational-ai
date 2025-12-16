import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";

const CoachIntro = () => {
  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* content */}
      <View style={styles.content}>
        {/* header text */}
        <Text style={styles.title}>Hi, I'm your support coach.</Text>
        <Text style={styles.subtitle}>
          I'm here to listen, understand,{"\n"}
          and walk with you.
        </Text>

        {/* coach card */}
        <View style={styles.card}>
          <View style={styles.pearlWrapper}>
            <Pearl width={150} />
          </View>

          <Text style={styles.cardTitle}>Emotional Support Coach</Text>
          <Text style={styles.cardText}>
            You can share as much or{"\n"}
            as little as you want. We'll{"\n"}
            move at your pace.
          </Text>
        </View>

        {/* description */}
        <Text style={styles.description}>
          This is your private space. I don't{"\n"}
          judge, and I don't rush.{"\n"}
          Whenever you're ready, we can{"\n"}
          begin.
        </Text>

        {/* start button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ width: "100%" }}
          onPress={() => router.push("/chat")}
        >
          <LinearGradient
            colors={["#FFF1C9", "#FFD6D6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Talking</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* footer */}
        <TouchableOpacity>
          <Text style={styles.footerText}>Not now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6F6F6F",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 40,
  },

  card: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255)",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 28,
    marginBottom: 36,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 2,
  },

  pearlWrapper: {
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6F6F6F",
    marginBottom: 10,
  },

  cardText: {
    fontSize: 16,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
  },

  description: {
    fontSize: 14,
    color: "#9E9E9E",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 26,
  },

  button: {
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 16,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8E8E8E",
  },

  footerText: {
    fontSize: 12,
    color: "#B3B3B3",
  },
});
  

export default CoachIntro;
