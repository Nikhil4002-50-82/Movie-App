import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 32 - 16 * 2) / 3; // Screen width - padding - gaps

const MovieCard: React.FC<Movie> = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}) => {
  return (
    <TouchableOpacity
      className="rounded-lg overflow-hidden bg-[#1A1A2E]/50 shadow-md"
      style={{ width: CARD_WIDTH, marginRight: 8, marginBottom: 16 }}
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png",
        }}
        className="w-full h-48"
        style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        resizeMode="cover"
      />
      <View className="p-2">
        <Text
          className="text-white text-sm font-semibold tracking-tight"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1 mt-1">
          <Image
            source={require("../assets/icons/star.png")}
            className="size-4"
            resizeMode="contain"
          />
          <Text className="text-white text-xs font-medium">
            {(vote_average / 2).toFixed(1)}
          </Text>
        </View>
        <Text className="text-xs text-gray-300 font-medium mt-1">
          {release_date?.split("-")[0] || "N/A"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;