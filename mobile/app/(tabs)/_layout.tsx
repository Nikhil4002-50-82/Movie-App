import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="home" size={34} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="OtherTab"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialIcons name="other-houses" size={34} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
