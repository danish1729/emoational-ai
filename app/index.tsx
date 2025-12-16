import { useEffect, useState } from "react";
import { View } from "react-native";

import SplashScreen from "../components/SplashScreen";
import NameInput from "../components/NameInput";
import LoginScreen from "../components/Login";
import GetStarted from "../components/GetStarted";
import SupportOptions from "../components/SupportOptions";
import FindingSupport from "../components/FindingSupport";
import CoachIntro from "../components/CoachIntro";
import ChatScreen from "../components/ChatScreen";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // ⏱ 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }

  return <ChatScreen />;
}
