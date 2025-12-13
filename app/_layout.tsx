import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import * as Splash from "expo-splash-screen";

import SplashScreen from "../components/SplashScreen";

// Keep native splash visible until we say so
Splash.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Wait for first frame to ensure splash renders
    requestAnimationFrame(() => {
      timeout = setTimeout(async () => {
        setShowSplash(false);
        await Splash.hideAsync();
      }, 2000); // ⏱ 2 seconds
    });

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  if (showSplash) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
