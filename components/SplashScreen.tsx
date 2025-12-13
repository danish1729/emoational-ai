import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pearl from './ui/Pearl'
import BgGlow from './ui/BgGlow';
import BottomGlow from './ui/BottomGlow';

const SplashScreen = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <BgGlow />
      <BottomGlow />
      
      <Pearl width={200} />
      <Text
        style={{
          fontFamily: "Arimo",
          fontSize: 16,
          textAlign: "center",
          lineHeight: 24,
          letterSpacing: 0.4,
          color: "#44403B",
        }}
      >
        Haven
      </Text>
      <Text
        style={{
          fontFamily: "Arimo",
          fontSize: 16,
          textAlign: "center",
          lineHeight: 22,
          letterSpacing: 0.2,
          marginTop: 13.5,
          color: "#79716B",
          opacity: 0.8                                                                                  ,
        }}
      >
        You're safe here.
      </Text>
    </View>
  );
}


export default SplashScreen