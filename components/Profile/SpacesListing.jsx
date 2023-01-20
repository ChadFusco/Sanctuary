import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import axios from 'axios';
import { useFonts } from 'expo-font';

const SpacesListing = ({ colorTheme, space, currentUser, navigation }) => {
  const [spaceData, setSpaceData] = React.useState({});

  const [fontsLoaded] = useFonts({
    FuzzyBubblesRegular: require('../../assets/fonts/FuzzyBubbles-Regular.ttf'),
    FuzzyBubblesBold: require('../../assets/fonts/FuzzyBubbles-Bold.ttf'),
  });

  React.useEffect(() => {
    axios.get(`http://ec2-52-33-56-56.us-west-2.compute.amazonaws.com:3000/spaces?space_name=${space}`)
      .then(({ data }) => {
        setSpaceData(data[0]);
      })
      .catch((err) => console.log('err from spaceslisting', err));
  }, []);

  if (!fontsLoaded || Object.keys(spaceData).length === 0) return;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: `${colorTheme.orange}`,
        padding: 18,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: "FuzzyBubblesBold" }}>{spaceData.space_name}</Text>
          <Text>
            {spaceData.members.length} members
          </Text>
        </View>
        <View>
          { spaceData.created_by === currentUser &&
            <Text style={{ left: 7, top: 2, color: `${colorTheme.beige}`, fontWeight: 'bold' }}>
              admin
            </Text>
            }
        </View>
      </View>

      <View>
        <Button
          color={`${colorTheme.blue}`}
          titleStyle={{ fontWeight: 'bold' }}
          buttonStyle={{
            borderRadius: 5,
          }}
          title="View Space"
          onPress={() => console.log('lead to space') ||
            navigation.navigate('Space', {
              space_name: spaceData.space_name,
              isAdmin: spaceData.created_by === currentUser,
              username: currentUser
            })}
        />
      </View>
    </View>
  );
};

export default SpacesListing;