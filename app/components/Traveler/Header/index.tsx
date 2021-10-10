import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../../navigation/NavigationService';
import ProfileReviews from '../../../screens/Profile/Reviews';
import styles from './styles';

interface TravelerHeaderComponentProps {}

const TravelerHeaderComponent: React.FC<TravelerHeaderComponentProps> = () => (
  <View style={styles.container}>
    <View style={styles.avatarView}>
      {/* TODO get seller profile pic or initial */}
      <Image
        style={styles.travelerImage}
        resizeMode="cover"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        source={require('../../../assets/images/mango.jpg')}
      />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>James Rodriguez</Text>
    </View>
    <View style={styles.reviewContainer}>
      <View style={styles.reviewIconContainer}>
        <MaterialIcon name="star" size={20} color="mediumvioletred" />
      </View>
      <View style={styles.reviewTextContainer}>
        <Pressable
          onPress={() => {
            NavigationService.navigate('Traveler Reviews', ProfileReviews);
          }}
        >
          {/* TODO ask Joe how to display reviews without stars - like how to get the user to click */}
          {/* TODO get review average + number of reviews */}
          <Text style={styles.reviewText}>4.5 (4)</Text>
        </Pressable>
      </View>
    </View>
  </View>
);
export default TravelerHeaderComponent;
