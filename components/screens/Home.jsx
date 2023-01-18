import React from "react";
import axios from "axios";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button
        title="Go to Test Page"
        onPress={() => navigation.navigate('Test Page')}
      />
      <Button
        title="Go to Comments Page"
        onPress={() => navigation.navigate('Comments')}
      />
      <Text>Welcome Page</Text>
      <Button
        title="Go to Welcome Screen"
        onPress={() => navigation.navigate('Welcome Screen')}
      />
    </View>
  );
};

export default Home;
