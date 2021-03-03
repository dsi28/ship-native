import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface TravelerCDComponentProps {}

const TravelerCDComponent: React.FC<TravelerCDComponentProps> = () => (
  <View
    style={{
      width: Dimensions.get('screen').width,
      backgroundColor: '#f3f5fa',
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5
        }}
      >
        <MaterialIcon name="location-pin" size={30} color="#87CEEB" />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: 'mediumvioletred',
            fontWeight: 'bold'
          }}
        >
          100 Miles Away
        </Text>
      </View>
    </View>

    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5
        }}
      >
        <MaterialIcon name="chat" size={30} color="mediumvioletred" />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: 'mediumvioletred',
            fontWeight: 'bold'
          }}
        >
          Chat
        </Text>
      </View>
    </View>
  </View>
);
export default TravelerCDComponent;
