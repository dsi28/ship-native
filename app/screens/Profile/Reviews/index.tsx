import React from 'react';
import { Image, Text, View } from 'react-native';
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
            <Text style={styles.aboutSectionTitle}>4.5 (4 reviews)</Text>
          </View>
        </View>

        {/* review 1 */}

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        {/* end review 1 */}

        {/* filler reviews */}

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        <View style={styles.flexDirectionCol}>
          <View style={styles.reviewHeaderView}>
            <View style={styles.reviewImageContainer}>
              <Image
                style={styles.reviewImage}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>

            <View style={styles.reviewerDetails}>
              <View>
                <Text style={styles.reviewerName}>Juan Cuadrado</Text>
              </View>
              <View>
                <Text style={styles.reviewDate}>January 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            {/* TODO get all reviews ready for review screen */}
            {/* TODO add read more */}
            <ReadMoreComponent
              fullText="Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6.Reivew text review. Decription test te st. Review four one two.
              Decription test1 decription test2 decription test3 decription test4
              decription test5 decription test6."
            />
          </View>
        </View>

        {/* End filler reviews */}
      </View>
    </ScrollView>
  </View>
);
export default ProfileReviews;
