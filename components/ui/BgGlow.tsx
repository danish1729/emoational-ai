import { View, StyleSheet } from "react-native";

export default function BgGlow() {
  return (
    <View style={styles.shadowWrapper}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    position: "absolute",
    pointerEvents: "none",
    top: "30%",
    width: "100%",
    height: 400,
    borderRadius: '100%',
    zIndex: -2,
    opacity: 0.2,

    elevation: 15, // Android
    filter: "blur(200px)",
  },
});
