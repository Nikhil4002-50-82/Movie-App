import {
  View,
  Image,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";

const Search: React.FC = () => {
  const TNDB_API_KEY: string = "f3a61c1c53da6422029f5e6c70934e23";
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");

  const searchMovies = async (q: string) => {
    if (!q.trim()) {
      setMovies([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TNDB_API_KEY}&language=en-US&query=${encodeURIComponent(q)}&page=1&include_adult=false`
      );
      setMovies(response.data.results);
    } catch (err: any) {
      console.log(`error message: ${err.message}`);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchMovies(query);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-[#0F0D23]">
      <StatusBar barStyle="light-content" backgroundColor="#0F0D23" />
      <Image
        source={require("../../assets/images/bg.png")}
        className="absolute w-full h-full opacity-30"
        resizeMode="cover"
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-4"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 8,
        }}
        contentContainerStyle={{ paddingBottom: 80 }}
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
            <View className="mb-6 mt-4 px-2">
              <SearchBar
                placeholder="Search for a movie..."
                value={query}
                onChangeText={(text: string) => {
                  setQuery(text);
                }}
              />
              {query && (
                <Text className="text-xl mt-4 text-white font-semibold tracking-tight">
                  Results for{" "}
                  <Text className="text-purple-300 font-bold">{query}</Text>
                </Text>
              )}
            </View>
          </>
        }
        ListEmptyComponent={
          <View className="flex-1 items-center mt-6">
            <Text className="text-gray-400 text-base font-medium">
              {query.trim()
                ? "No movies found"
                : "Start typing to search for movies"}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Search;
