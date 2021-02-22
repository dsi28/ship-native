import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import styles from './styles';

// interface RequestItemProps {
//   itemIntial: string;
//   itemName: string;
//   itemPrice: string;
//   itemRating: number;
//   itemDistance: string;
//   handleDecline: () => void;
//   handleAccept: () => void;
//   expirationTime?: string;
//   itemStatus?: string;
// }

const ItemComponent: React.FC = () => (
  <View style={styles.cardItemContainer}>
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <View style={{ marginRight: 10 }}>
        <View style={styles.avatarView}>
          {/* TODO get seller profile pic or initial */}
          <Text style={styles.avatarLetter}>D</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <View
            style={{
              ...styles.iconView,
              ...{ marginRight: 0 }
            }}
          >
            <MaterialIcon name="location-pin" size={20} color="#e91e63" />
          </View>
          <View>
            <Text style={styles.fontSize15}>100 Miles</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.cardDetailsView}>
          <View style={styles.topRow}>
            <View style={{ flexDirection: 'column' }}>
              <View>
                {/* TODO get item name */}
                <Text
                  style={{
                    ...styles.fontSize17,
                    ...{ fontWeight: 'bold', color: '#e91e63' }
                  }}
                >
                  Alphanso Mangoes
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {/* TODO get destination */}
                <View>
                  <Text style={{ fontSize: 15, color: 'gray' }}>To:</Text>
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 15, color: 'black' }}>
                    California, USA
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {/* TODO get size */}
                <View>
                  <Text style={{ fontSize: 15, color: 'gray' }}>Size:</Text>
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 15, color: 'black' }}>Large</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {/* TODO get delivery date */}
                <View>
                  <Text style={{ fontSize: 15, color: 'gray' }}>
                    Delivery by:
                  </Text>
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 15, color: 'black' }}>
                    Jul 22, 2019
                  </Text>
                </View>
              </View>
            </View>
            <View>
              {/* TODO get bid price */}
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$60</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

// interface ProfileProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const HomeScreenTab: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        <ItemComponent />
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#e91e63' },
        style: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen
        name="Sender"
        component={HomeScreenTab}
        options={{ tabBarLabel: 'Sender' }}
      />
      <Tab.Screen
        name="Traveler"
        component={HomeScreenTab}
        options={{ tabBarLabel: 'Traveler' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreenTabs} />
  </Stack.Navigator>
);

export default HomeStack;
