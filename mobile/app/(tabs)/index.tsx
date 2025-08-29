import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import axios from "axios";
// import { TMDB_API_KEY } from '@env';

const TNDB_API_KEY: string = "f3a61c1c53da6422029f5e6c70934e23";

const Index: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${TNDB_API_KEY}`
      );
      setMovies(response.data.results);
    } catch (err: any) {
      console.log(`error message : ${err.message}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const router = useRouter();
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
        <View style={{ marginTop: 20 }}>
          {movies.map((movie) => (
            <TouchableOpacity
              key={movie.id}
              style={{
                backgroundColor: "#1c1c3c",
                borderRadius: 12,
                marginBottom: 16,
                padding: 12,
                flexDirection: "row",
                alignItems: "center",
              }}
              activeOpacity={0.8}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                }}
                style={{
                  width: 80,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 12,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  {movie.title}
                </Text>
                <Text style={{ color: "#aaa", fontSize: 14, marginTop: 4 }}>
                  {movie.release_date}
                </Text>
                <Text
                  numberOfLines={3}
                  style={{ color: "#ccc", fontSize: 12, marginTop: 6 }}
                >
                  {movie.overview}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
