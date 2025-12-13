import { View, StyleSheet } from "react-native";

export default function BottomGlow() {
  return (
    <View
            style={{
              position: "absolute",
              bottom: 10,
              pointerEvents: "none",
              width: "100%",
              height: 130,
              borderRadius: 200,
              zIndex: -2,
              opacity: 0.4,
    
              elevation: 15, // Android
              filter: "blur(100px)",
            }}
          ></View>
  );
}
