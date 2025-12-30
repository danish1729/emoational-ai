import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";

const SignupScreen = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = async () => {
    /**
     * 🔐 API call will go here later
     * For now we simulate a token
     */
    const fakeToken = "user-auth-token-123456";

    // Save token in mobile storage
    await AsyncStorage.setItem("authToken", fakeToken);

    // Navigate to home
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* pearl */}
      <Pearl width={110} />

      {/* content */}
      <View style={styles.content}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.title}>Create account</Text>

          <Text style={styles.subtitle}>
            Enter your details to get started.
          </Text>

          <TextInput
            placeholder="Full name"
            placeholderTextColor="#B7B7B7"
            style={styles.input}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Email or phone"
            placeholderTextColor="#B7B7B7"
            style={styles.input}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#B7B7B7"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignup}
            disabled={!name || !email || !password}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.footerText} onPress={() => router.push("/login")}>
            Already have an account?
          </Text>

          <Text style={styles.footerHelp}>Need help signing up?</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  content: {
    width: 280,
    alignItems: "center",
    marginTop: 20,
    gap: 55,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F6F6F",
    marginTop: 20,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 24,
  },

  input: {
    width: "100%",
    height: 46,
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 23,
    paddingHorizontal: 18,
    fontSize: 14,
    color: "#6F6F6F",
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFEED6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  buttonText: {
    fontSize: 14,
    color: "#A5A5A5",
    fontWeight: "500",
  },

  footerText: {
    fontSize: 13,
    color: "#B5B5B5",
    marginBottom: 6,
  },

  footerHelp: {
    fontSize: 12,
    color: "#C5C5C5",
  },
});
  
export default SignupScreen;
