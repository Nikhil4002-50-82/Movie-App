import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useData from "@/services/useData";

const Index: React.FC = () => {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
    refetch,
  } = useData<[]>("http://192.168.1.6:3000/fetchMovies");

  return (
    <View className="h-screen bg-['#0f0D23'] flex-1 w-full">
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
        <Text>{movies ? movies.results[0].title : ""}</Text>
      </ScrollView>
    </View>
  );
};

export default Index;
