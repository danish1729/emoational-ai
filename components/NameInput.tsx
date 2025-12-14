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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const NameInput = () => {
  const [name, setName] = React.useState("");

  const handleContinue = async () => {
    await AsyncStorage.setItem("user_name", name);
    router.push("/home");
  };

  const handleAnonymous = async () => {
    await AsyncStorage.setItem("user_name", "Anonymous");
    router.push("/home");
  };
  return (
    <View style={styles.container}>
      {/* background glows */}
      <BgGlow />
      <BottomGlow />

      {/* pearl */}
      <Pearl width={120} />

      {/* content */}
      <View style={styles.content}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={styles.title}>What should I call you?</Text>

          <Text style={styles.subtitle}>
            You can use a nickname. This is{"\n"}your private space.
          </Text>

          <TextInput
            placeholder="Enter a name or alias..."
            placeholderTextColor="#B7B7B7"
            style={styles.input}
            onChangeText={setName}
          />
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handleContinue} disabled={name.trim() === ""}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAnonymous}>
            <Text style={styles.footerText}>I prefer to stay anonymous</Text>
          </TouchableOpacity>
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
    backgroundColor: 'transparent',
  },

  content: {
    width: 280,
    alignItems: "center",
    marginTop: 20,
    gap: 60,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6F6F6F",
    marginTop: 20,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#9B9B9B",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 26,
  },

  input: {
    width: "100%",
    height: 46,
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 23,
    paddingHorizontal: 18,
    fontSize: 14,
    color: "#6F6F6F",
    marginBottom: 28,

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
    fontSize: 12,
    color: "#B3B3B3",
  },
});
  

export default NameInput;
