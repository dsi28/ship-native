import React from 'react';
import { Image, Text, View } from 'react-native';
// @ts-ignore
import StarIcon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import CheckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface BasicInfoSectionProps {
  userProfile: any;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ userProfile }) => (
  <View style={styles.sectionContatiner}>
    <View style={styles.row}>
      <View style={styles.flex3}>
        <View style={styles.marginBottom10}>
          <Text style={styles.nameTitle}>Hi, I&apos;m {userProfile.name}</Text>
        </View>
        <View>
          {/* TODO get year joined */}
          <Text style={styles.joinedTitle}>Joined in 2014</Text>
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarView}>
          {/* <Text style={styles.avatarLetter}>{userProfile.name[0]}</Text> */}
          <Image
            style={{
              // flex: 2,
              height: '100%',
              width: '100%',
              borderRadius: 30,
              borderWidth: 5
            }}
            // resizeMode="contain"
            resizeMode="cover"
            source={{
              uri: userProfile.pictures
            }}
          />
        </View>
      </View>
    </View>
    <View>
      <View style={styles.reviewRow}>
        <View style={styles.iconView}>
          <StarIcon name="star-o" size={30} color="black" />
        </View>
        <View>
          {/* TODO get reviews */}
          <Text style={styles.reviewVerfiedText}>199 reviews</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconView}>
          <CheckIcon name="shield-check-outline" size={30} color="black" />
        </View>
        <View>
          {/* TODO check if identity is verified */}
          <Text style={styles.reviewVerfiedText}>Identity verified</Text>
        </View>
      </View>
    </View>
  </View>
);
export default BasicInfoSection;
