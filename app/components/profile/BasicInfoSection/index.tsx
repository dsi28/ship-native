import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../../navigation/NavigationService';
import NavigationLinkComponent from '../../navigationLink';
import styles from './styles';

interface BasicInfoSectionProps {
  userProfile: any;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ userProfile }) => (
  <View style={styles.sectionContatiner}>
    <View style={styles.row}>
      <View style={styles.flex3}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTitle}>{userProfile.name}</Text>
        </View>
        <View>
          {/* TODO go to profile instead of Reviews */}
          <NavigationLinkComponent
            navigateTo="Reviews"
            textColor="mediumvioletred"
            linkText="View and Edit Profile"
          />
        </View>
        <Pressable onPress={() => NavigationService.navigate('Reviews')}>
          <View style={styles.reviewRow}>
            <View style={styles.iconView}>
              <StarIcon name="star-o" size={30} color="black" />
            </View>
            <View>
              <Text style={styles.reviewVerfiedText}>Reviews</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarView}>
          <Image
            style={styles.userImage}
            resizeMode="cover"
            source={{
              uri: userProfile.pictures
            }}
          />
        </View>
      </View>
    </View>
    <View>
      <Pressable onPress={() => NavigationService.navigate('Reviews')}>
        <View style={styles.reviewRow}>
          <View style={styles.iconView}>
            <StarIcon name="star-o" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.reviewVerfiedText}>Reviews</Text>
          </View>
        </View>
      </Pressable>
    </View>
  </View>
);
export default BasicInfoSection;
