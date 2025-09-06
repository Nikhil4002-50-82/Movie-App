import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

const TNDB_API_KEY = process.env.TNDB_API_KEY;

const Index: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${TNDB_API_KEY}`
      );
      setMovies(response.data.results);
    } catch (err: any) {
      console.log(`error message: ${err.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#0F0D23]">
      <StatusBar barStyle="light-content" backgroundColor="#0F0D23" />
      <Image
        source={require("../../assets/images/bg.png")}
        className="absolute w-full h-[50%]"
        resizeMode="cover"
      />

      <FlatList
        className="px-4"
        data={[]}
        ListHeaderComponent={
          <>
            <View className="flex items-center justify-center mt-20 mb-6">
              <Image
                source={require("../../assets/icons/logo.png")}
                className="h-12 w-14"
                resizeMode="contain"
              />
              <Text className="text-white text-2xl font-extrabold mt-3 tracking-wider">
                MovieFlix
              </Text>
            </View>
            <View className="mb-6">
              <Text className="text-white font-semibold text-xl mb-4 px-2 tracking-tight">
                Trending Movies
              </Text>
              <FlatList
                data={movies.slice(0, 6)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieCard {...item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
              />
            </View>
            <View className="mb-6">
              <Text className="text-white font-semibold text-xl mb-4 px-2 tracking-tight">
                Popular Movies
              </Text>
              <FlatList
                data={movies.slice(6)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieCard {...item} />}
                numColumns={3}
                contentContainerStyle={{ gap: 8 }}
                columnWrapperStyle={{
                  justifyContent: "space-between", // spreads items evenly
                }}
                className="px-1"
              />
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  );
};

export default Index;
