import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const OtherTab: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#0f0d23]">
      <Link href="/2" asChild>
        <Text className="text-xl text-blue-300">Movie Details</Text>
      </Link>
    </View>
  );
};

export default OtherTab;
