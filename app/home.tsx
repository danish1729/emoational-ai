import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem("user_name");
      if (storedName) setName(storedName);
    };

    loadName();
  }, []);

  return (
    <View>
      <Text>Welcome, {name}</Text>
    </View>
  );
};

export default Home;
