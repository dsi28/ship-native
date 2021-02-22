import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// @ts-ignore
import StarIcon from 'react-native-vector-icons/FontAwesome';
import ReadMoreComponent from '../../../components/readMore';
import styles from './styles';

interface ProfileReviewsProps {
  userProfile?: any; // remove ? when we pass user here
}

const ProfileReviews: React.FC<ProfileReviewsProps> = () => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.scrollViewContainer}>
        <View style={styles.reviewRow}>
          <View style={styles.iconView}>
            <StarIcon name="star" size={25} color="#e91e63" />
          </View>
          <View style={styles.reviewTitleView}>
            <Text style={styles.aboutSectionTitle}>5.0 (19 reviews)</Text>
          </View>
        </View>

        {/* review 1 */}

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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>

        {/* end review 1 */}

        {/* filler review */}
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
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
            <ReadMoreComponent
              fullText="reivew text review Decription test Review four one two
              Decription test1 Decription test2 Decription test3 Decription test4
              Decription test5 Decription test6 eivew text review Decription test 
              Review four one two Decription test1 Decription test2 Decription 
              test3 Decription test4 Decription test5 Decription test6"
            />
          </View>
        </View>
        {/* end filler reviews */}
      </View>
    </ScrollView>
  </View>
);
export default ProfileReviews;
