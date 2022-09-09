import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../../navigation/NavigationService';
import ProfileReviews from '../../../screens/Profile/Reviews';
import styles from './styles';

interface TravelerRowHeaderComponentProps {
  name: string;
  image: any;
  review: string;
}

const TravelerRowHeaderComponent: React.FC<TravelerRowHeaderComponentProps> = ({
  name,
  image,
  review
}) => (
  <View style={styles.container}>
    <View style={styles.avatarView}>
      {/* TODO get seller profile pic or initial */}
      <Image style={styles.travelerImage} resizeMode="cover" source={image} />
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewIconContainer}>
          <MaterialIcon name="star" size={20} color="#87CEEB" />
        </View>
        <View style={styles.reviewTextContainer}>
          <Pressable
            onPress={() => {
              NavigationService.navigate('Traveler Reviews', ProfileReviews);
            }}
          >
            {/* TODO ask Joe how to display reviews without stars - like how to get the user to click */}
            {/* TODO get review average + number of reviews */}
            <Text style={styles.reviewText}>{review}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </View>
);
export default TravelerRowHeaderComponent;
