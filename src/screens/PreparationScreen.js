import { View, Image, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const PreparationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        className="h-80 w-80"
        source={require("../assets/images/delivery.gif")}
      />
    </View>
  );
};

export default PreparationScreen;
