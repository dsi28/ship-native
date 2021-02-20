import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import RequestItemComponent from '../../components/requestItem';
import styles from './styles';

// interface ProfileProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const UserRequests: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        {/* Start fillers */}
        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="Seller Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />
        {/* end fillers */}
      </View>
    </ScrollView>
  );
};

// const Stack = createStackNavigator();
// const UserRequestStack: React.FC = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={SellerProfile} />
//     <Stack.Screen name="Reviews" component={ProfileReviews} />
//   </Stack.Navigator>
// );

export default UserRequests;
