import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

const TNDB_API_KEY: string = "f3a61c1c53da6422029f5e6c70934e23";

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
        className="absolute w-full h-full opacity-30"
        resizeMode="cover"
      />
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
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
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                release_date={item.release_date}
              />
            )}
            numColumns={3}
            scrollEnabled={false}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 8,
            }}
            className="px-0"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
