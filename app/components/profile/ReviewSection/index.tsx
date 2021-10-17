import React from 'react';
import { Text, View } from 'react-native';
// @ts-ignore
import StarIcon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../../navigation/NavigationService';
import WideButton from '../../buttons/WideButton';
import styles from './styles';

interface ReviewSectionProps {
  userProfile?: any; // remove ? when we pass user here
}

const ReviewSection: React.FC<ReviewSectionProps> = () => (
  <View style={{ ...styles.sectionContatiner, ...styles.addSectionContainer }}>
    <View style={{ ...styles.reviewRow, ...styles.marginBottom40 }}>
      <View style={styles.iconView}>
        <StarIcon name="star" size={25} color="#e91e63" />
      </View>
      <View style={styles.reviewTitleView}>
        <Text style={styles.aboutSectionTitle}>5.0 (19 reviews)</Text>
      </View>
    </View>
    <View>
      <View>
        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View>
              <View style={styles.reviewAvatar}>
                <Text style={styles.avatarLetter}>S</Text>
              </View>
            </View>
            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Seller</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2020</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <Text style={{ fontSize: 17 }} numberOfLines={5}>
              reivew text review Decription test Review four one two
              {'\n'}
              Decription test1{'\n'}
              Decription test2{'\n'}
              Decription test3{'\n'}
              Decription test4{'\n'}
              Decription test5{'\n'}
              Decription test6{'\n'}
            </Text>
          </View>
          <View style={styles.marginTop20}>
            {/* TODO create review screen to see all reviews */}
            <WideButton
              buttonText="View all reviews"
              onPressHandler={() => {
                NavigationService.navigate('Reviews');
              }}
              isSelected={false}
              btnBackgoundColor="mediumvioletred"
              btnBorderColor="mediumvioletred"
              btnTextColor="black"
            />
          </View>
        </View>
      </View>
    </View>
  </View>
);
export default ReviewSection;
