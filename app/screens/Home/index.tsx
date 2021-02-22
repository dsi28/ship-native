import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarIcon from 'react-native-vector-icons/FontAwesome';
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
    <View style={{ flexDirection: 'row' }}>
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
      <View>
        <View style={styles.flexDirectionRow}>
          <View style={styles.cardDetailsView}>
            <View style={styles.topRow}>
              <View style={{ flexDirection: 'column' }}>
                <View>
                  {/* TODO get seller name */}
                  <Text
                    style={{ ...styles.fontSize17, ...{ fontWeight: 'bold' } }}
                  >
                    Name
                  </Text>
                </View>
                {/* {itemStatus && ( */}
                <View>
                  {/* TODO get seller name */}
                  <Text style={{ fontSize: 17, color: 'gray' }}>Status</Text>
                </View>
                {/* )} */}
              </View>

              <View>
                {/* TODO get bid price */}
                <Text style={styles.fontSize25}>22</Text>
              </View>
            </View>
            <View style={styles.bottomRow}>
              {/* TODO get rating */}
              <View style={styles.flexDirectionRow}>
                <View style={styles.iconView}>
                  <StarIcon name="star" size={17} color="#e91e63" />
                </View>
                <View>
                  <Text style={styles.fontSize17}>5</Text>
                </View>
              </View>
              <View>
                {/* TODO get seller distance */}
                <Text style={styles.fontSize17}>5.2</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text>Second Row</Text>
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
    <ScrollView>
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
