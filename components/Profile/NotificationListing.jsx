import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@rneui/themed';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('reported', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const NotificationListing = ({ username, reported, reportedBy, spaceName, commentId, confessionId, navigation, reportedCookie, unreadNotifs, setUnreadNofits }) => {
  const [isReported, setIsReported] = React.useState(false);
  const name = reported === username ? 'Your' : username + "'s";
  const post = commentId ? 'comment' : 'confession';

  const handleBan = () => {
    setIsReported(true);

    let temporaryCookie = reportedCookie ? reportedCookie.slice() : [];
    temporaryCookie.push({
      reportedUser: reported,
      confessionId: confessionId,
      commentId: commentId,
    });
    storeData(temporaryCookie);

    setUnreadNofits(unreadNotifs - 1);
  };

  if (!unreadNotifs) return;

  return (
    <View style={{ borderWidth: 1, borderRadius: 15, padding: 10 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{name} </Text>
        <Text>{post} in the </Text>
        <Text style={{ fontWeight: 'bold' }}>{spaceName} </Text>
        <Text>space has been reported by </Text>
        <Text style={{ fontWeight: 'bold' }}>{reportedBy}.</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
      {/* , justifyContent: 'space-evenly'  */}
        { reported !== username &&
          <Button
          // style={{ position: 'absolute', right: 5 }}
          size="sm"
          buttonStyle={{ borderRadius: 30 }}
          title={isReported ? "User Banned" : "Ban Reported"}
          type="outline"
          onPress={() => console.log('Banning reported') || handleBan()}
          />
        }
        <Button
          size="sm"
          buttonStyle={{ borderRadius: 30 }}
          title={`View ${post}`}
          onPress={() => navigation.navigate('Comments', {
            confession_id: confessionId,
            comment_id: commentId,
          })}
        />
      </View>
    </View>
  );
};

export default NotificationListing;