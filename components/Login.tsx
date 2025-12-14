import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Pearl from "./ui/Pearl";
import BgGlow from "./ui/BgGlow";
import BottomGlow from "./ui/BottomGlow";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // auth logic later
    router.push("/home");
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
          <Text style={styles.title}>Welcome back</Text>

          <Text style={styles.subtitle}>
            Enter your account details to continue.
          </Text>

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

          <Text style={styles.forgot}>Forgot password?</Text>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={!email || !password}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>Create a new account</Text>
          <Text style={styles.footerHelp}>Need help signing in?</Text>
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

  forgot: {
    fontSize: 12,
    color: "#B3B3B3",
    marginTop: 10,
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

export default LoginScreen;
