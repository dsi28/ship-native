import React from 'react';
import { Pressable, Text, View } from 'react-native';
// @ts-ignore
import StarIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface RequestItemProps {
  itemIntial: string;
  itemName: string;
  itemPrice: string;
  itemRating: number;
  itemDistance: string;
  handleDecline: () => void;
  handleAccept: () => void;
  expirationTime?: string;
  itemStatus?: string;
}

const RequestItemComponent: React.FC<RequestItemProps> = ({
  itemIntial,
  itemName,
  itemPrice,
  itemRating,
  itemDistance,
  handleDecline,
  handleAccept,
  // expirationTime,
  itemStatus
}) => (
  <View style={styles.cardItemContainer}>
    <View style={styles.flexDirectionRow}>
      <View style={styles.avatarView}>
        {/* TODO get seller profile pic or initial */}
        <Text style={styles.avatarLetter}>{itemIntial}</Text>
      </View>
      <View style={styles.cardDetailsView}>
        <View style={styles.topRow}>
          <View style={styles.flexDirectionCol}>
            <View>
              {/* TODO get seller name */}
              <Text style={{ ...styles.fontSize17, ...{ fontWeight: 'bold' } }}>
                {itemName}
              </Text>
            </View>
            {itemStatus && (
              <View>
                {/* TODO get seller name */}
                <Text style={styles.statusText}>{itemStatus}</Text>
              </View>
            )}
          </View>

          <View>
            {/* TODO get bid price */}
            <Text style={styles.fontSize25}>{itemPrice}</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          {/* TODO get rating */}
          <View style={styles.flexDirectionRow}>
            <View style={styles.iconView}>
              <StarIcon name="star" size={17} color="#e91e63" />
            </View>
            <View>
              <Text style={styles.fontSize17}>{itemRating}</Text>
            </View>
          </View>
          <View>
            {/* TODO get seller distance */}
            <Text style={styles.fontSize17}>{itemDistance}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.flexDirectionRow}>
      <View style={styles.leftButtonView}>
        <Pressable onPress={handleDecline} style={styles.buttonPresable}>
          <Text style={styles.buttonDeclineText}>Decline</Text>
        </Pressable>
      </View>
      <View style={styles.rightButtonView}>
        <Pressable onPress={handleAccept} style={styles.buttonPresable}>
          <Text style={styles.buttonAcceptText}>Accept</Text>
        </Pressable>
      </View>
    </View>
  </View>
);
export default RequestItemComponent;
