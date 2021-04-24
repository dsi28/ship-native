import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import BasicInfoSection from '../../../components/profile/BasicInfoSection';
import ProfileReviews from '../Reviews';
import styles from './styles';

const SellerProfile: React.FC = () => {
  // @ts-ignore
  const userProfile = useSelector((state: AppState) => state.profile);
  console.log(userProfile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15 }}>
          {/* <CarouselSection data={userProfile.pictures} /> */}
          <BasicInfoSection userProfile={userProfile} />
        </View>

        <View
          style={{
            flexDirection: 'column',
            width: Dimensions.get('window').width
          }}
        >
          <View>
            <View
              style={{
                paddingVertical: 20,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                marginBottom: 10
              }}
            >
              <Pressable
                onPress={() => {
                  console.log('logout');
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}
                    >
                      Logout
                    </Text>
                  </View>
                  <View
                    style={{
                      marginRight: 10,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <MIcons name="logout" size={30} color="gray" />
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        {/* <AboutSection />
        <ConfirmedSection />
        <ReviewSection /> */}
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();
const SellerProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={SellerProfile} />
    <Stack.Screen name="Reviews" component={ProfileReviews} />
  </Stack.Navigator>
);

export default SellerProfileStack;
