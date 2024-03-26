import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Payments from "../screens/drawerScreens/Payments";
import TweetDetailScreen from "../screens/homeStack/TweetDetailScreen";
import Feed from "../screens/tabScreens/Feed";
import Notifications from "../screens/tabScreens/Notifications";
import Settings from "../screens/tabScreens/Settings";
import { StatusBar } from "expo-status-bar";

// Top Tabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: 600,
        },
        tabBarIndicatorStyle: {
          height: 5,
          backgroundColor: "#1da1f2",
        },
      }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
    </TopTabs.Navigator>
  );
}

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

// Bottom Tabs
const Tab = createBottomTabNavigator();

function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ size, color, focused }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1da1f2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          tabBarLabel: "Home",
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <SafeAreaView style={[styles.container]}>
        <DrawerGroup />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
