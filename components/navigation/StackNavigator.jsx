import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home.jsx";
import TestPage from "../screens/TestPage.jsx";
import Spaces from "../screens/Spaces.jsx";
import Search from "../search/Search.jsx";
import SpacesForm from "../search/SpacesForm.jsx";
import ProfileTest from "../screens/ProfileTest.jsx";
import WelcomeScreen from "../Authenticate/WelcomeScreen.jsx";
import LoginScreen from "../Authenticate/LoginScreen.jsx";
import SignUpScreen from "../Authenticate/SignUpScreen.jsx";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test Page" component={TestPage} />
      <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const SpaceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Spaces" component={Spaces} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Spaces Form" component={SpacesForm} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={ProfileTest} />
    </Stack.Navigator>
  );
};

const AuthenticateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProfileStackNavigator, SpaceStackNavigator, SearchStackNavigator, AuthenticateStackNavigator };