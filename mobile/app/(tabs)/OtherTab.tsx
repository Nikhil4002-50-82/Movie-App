import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const OtherTab = () => {
  return (
    <View className="h-screen flex-1 items-center justify-center">
      <Link href="/(movie-details)/Movie" className="text-2xl color-blue-600">
        Movie Details
      </Link>
    </View>
  );
};

export default OtherTab;
