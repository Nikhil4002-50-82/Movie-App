import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";

interface MovieInfoProps {
  label: string;
  value: string | number | null;
}
const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-gray-200 font-normal text-sm">{label}</Text>
    <Text className="text-gray-100 font-normal text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDeatils = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<any | null>(null);
  const TNDB_API_KEY = process.env.TNDB_API_KEY;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${TNDB_API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (err: any) {
        console.error("Error fetching movie:", err.message);
      }
    };
    if (id) getMovie();
  }, [id]);

  if (!movie) {
    return (
      <View className="flex-1 items-center justify-center bg-[#0f0d23]">
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#0f0d23]">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
          }}
          className="w-full h-[500px]"
          resizeMode="stretch"
        />
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white text-xl font-bold">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-gray-200 text-sm">
              {movie.release_date?.split("-")[0]}
            </Text>
            <Text className="text-gray-200 text-sm">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-gray-900 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image
              source={require("../../assets/icons/star.png")}
              className="size-4"
            />
            <Text className="text-white text-sm font-bold">
              {Math.round(movie?.vote_average ?? 0)}
            </Text>
            <Text className="text-gray-200 text-sm font-bold">
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Genre"
            value={movie?.genre?.map((g) => g.name).join("-" || "N/A")}
          />
          <View className="flex flex-row justify-between w-[50%]">
            <MovieInfo
              label="Budget"
              value={`$${movie?.budget / 1000000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={Math.round(movie?.revenue) / 1000000}
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={movie?.production_companies
              .map((c) => c.name)
              .join("-" || "N/A")}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-purple-600 rounded-lg py-3 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={require("../../assets/icons/arrow.png")}
          className="mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDeatils;
