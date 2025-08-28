import { View, Image, ScrollView } from "react-native";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

const Index: React.FC = () => {
  const router = useRouter();
  return (
    <View className="h-screen bg-['#0f0D23'] flex-1">
      <Image
        source={require("../../assets/images/bg.png")}
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <View className="flex items-center justify-center mb-6">
          <Image
            source={require("../../assets/icons/logo.png")}
            className="mt-20 h-12 w-10"
          />
        </View>
        <SearchBar
          placeholder="search for a movie"
          onPress={() => {
            router.push("/Search");
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Index;
