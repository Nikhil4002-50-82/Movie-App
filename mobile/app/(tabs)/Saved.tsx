import { View, Text, Image } from "react-native";
import React from "react";

const Saved = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#0f0d23] px-10">
      <View className="flex items-center justify-center flex-1 flex-col gap-5">
        <Image
          source={require("../../assets/icons/save.png")}
          className="size-10"
          tintColor="#fff"
        />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </View>
  );
};

export default Saved;
