import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Payments from "../screens/drawerScreens/Payments";
import TweetDetailScreen from "../screens/homeStack/TweetDetailScreen";
import Feed from "../screens/tabScreens/Feed";
import Notifications from "../screens/tabScreens/Notifications";
import Settings from "../screens/tabScreens/Settings";

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

function TabGroup() {
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
        component={Feed}
        options={{ tabBarLabel: "Home" }}
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
  return (
    <NavigationContainer>
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
