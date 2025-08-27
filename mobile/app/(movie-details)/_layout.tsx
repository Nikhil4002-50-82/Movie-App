import { Stack } from "expo-router";

const MovieLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Movie"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default MovieLayout;
