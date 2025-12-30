import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";

const GetStarted = () => {
  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* card */}
      <View style={styles.card}>
        {/* pearl */}
        <Pearl width={150} />

        {/* text */}
        <Text style={styles.title}>Welcome to Haven</Text>
        <Text style={styles.subtitle}>
          A gentle space to talk, reflect,{"\n"}and breathe.
        </Text>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push("/name")}
          style={{ width: "100%" }}
        >
          <LinearGradient
            colors={["#FFF1C9", "#FFD6D6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText} onPress={() => {router.replace("/(onboarding)/name");}}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* footer */}
        <TouchableOpacity>
          <Text style={styles.footerText} onPress={() => router.replace("/(onboarding)/Login")}>I already have an account</Text>
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

  card: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,


    elevation: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6F6F6F",
    marginTop: 22,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 100,
  },

  button: {
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  buttonText: {
    fontSize: 14,
    color: "#8E8E8E",
    fontWeight: "500",
  },

  footerText: {
    fontSize: 12,
    color: "#B3B3B3",
  },
});
  

export default GetStarted;
