import { Tabs } from "expo-router";
import { ImageBackground, Text, Image } from "react-native";

interface BottomNav {
  focused: boolean;
  src: string;
  title: string;
}

const icons: Record<string, any> = {
  home: require("../../assets/icons/home.png"),
  search: require("../../assets/icons/search.png"),
  save: require("../../assets/icons/save.png"),
  person: require("../../assets/icons/person.png"),
};

const BottomNavComp: React.FC<BottomNav> = ({ focused, src, title }) => {
  if (focused === true) {
    return (
      <ImageBackground
        source={require("../../assets/images/highlight.png")}
        className="bg-slate-300 w-[7.5em] h-[4em] flex gap-1 flex-row items-center justify-center mt-4 rounded-full overflow-hidden flex-2"
      >
        <Image tintColor="#151312" className="size-5" source={icons[src]} />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <ImageBackground className="w-[6.8em] h-[3.5em] flex gap-1 flex-row items-center justify-center mt-4 rounded-3xl overflow-hidden">
      <Image tintColor="#A8B5DB" className="size-5" source={icons[src]} />
    </ImageBackground>
  );
};

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarLabel: () => null,
        tabBarStyle:{
          backgroundColor:"#0f0D23",
          marginBottom:20,
          height:56,
          borderRadius:50,
          overflow:"hidden",
          borderColor:"#0f0d23",
          borderWidth:1,
          position:"absolute",
          marginHorizontal:5
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomNavComp focused={focused} title="Home" src="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomNavComp focused={focused} title="Search" src="search" />
          ),
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomNavComp focused={focused} title="Saved" src="save" />
          ),
        }}
      />
      <Tabs.Screen
        name="OtherTab"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <BottomNavComp focused={focused} title="Profile" src="person" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
