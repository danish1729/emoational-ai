import { Stack } from "expo-router";
import * as Splash from "expo-splash-screen";
import { useEffect } from "react";

Splash.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    Splash.hideAsync(); // hide native splash when app is ready
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
