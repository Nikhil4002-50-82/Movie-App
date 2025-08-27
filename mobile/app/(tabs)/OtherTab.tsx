import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const OtherTab = () => {
  return (
    <View className="h-screen bg-['#0f0D23'] flex-1 items-center justify-center">
      <Link href="/(movie-details)/Movie" className="text-xl color-blue-300">
        Movie Details
      </Link>
    </View>
  );
};

export default OtherTab;
