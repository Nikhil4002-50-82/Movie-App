import { View, Image, TextInput } from "react-native";
import React from "react";

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onPress,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex flex-row items-center justify-center bg-blue-950 py-2 px-6 rounded-full">
      <Image
        source={require("../assets/icons/search.png")}
        className="size-5 mr-2"
        tintColor="#A8B5DB"
      />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
        className="text-white flex-1"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
