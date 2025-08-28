import { View, Image, TextInput } from "react-native";
import React from "react";

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onPress }) => {
  return (
    <View className="flex flex-row items-center">
      <Image
        source={require("../assets/icons/search.png")}
        className="size-5 mr-20"
        tintColor="#A8B5DB"
      />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        onChangeText={() => {}}
        value=""
        className="text-white flex-1"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
