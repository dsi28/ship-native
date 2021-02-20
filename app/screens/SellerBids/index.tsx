import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import RequestItemComponent from '../../components/requestItem';
import styles from './styles';

// interface SellerBidsProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const SellerBids: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
          itemStatus="waiting on user"
        />

        {/* Start fillers */}
        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
          itemDistance="1,2 km"
          itemPrice="BSD125"
          itemRating={4.6}
          handleDecline={() => console.log('Decline')}
          handleAccept={() => console.log('Accept')}
        />

        <RequestItemComponent
          itemIntial="S"
          itemName="User Name"
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

export default SellerBids;
