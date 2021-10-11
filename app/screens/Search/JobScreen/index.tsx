import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerPaymentComponent from '../../../components/Traveler/TravelerPayment';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

interface SearchJobScreenProps {
  route: any;
}

const SearchJobScreen: React.FC<SearchJobScreenProps> = ({ route }) => {
  const job: IJob = route.params;
  console.log('job in search', job);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{job.itemName}</Text>
        </View>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            // source={{ uri: job.itemImages }}
            // eslint-disable-next-line global-require
            source={require('../../../assets/images/mango.jpg')}
          />
        </View>
        <View>
          <View style={styles.detailsContainer}>
            <View>
              <JobPropertyComponent
                title="Deliver to"
                // @ts-ignore
                value={job.itemDeliveryLocation}
              />
            </View>
            <View style={styles.distanceContainer}>
              <View style={styles.distancePinContainer}>
                <View style={styles.distancePinIconContainer}>
                  <MaterialIcon name="location-pin" size={30} color="#87CEEB" />
                </View>
                <View>
                  <Text style={styles.distancePinText}>100 Miles</Text>
                </View>
              </View>
              <View>
                <Pressable onPress={() => console.log('view in map')}>
                  <Text style={styles.distanceMapLinkText}>View in Map</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.paymentCompContainer}>
            <TravelerPaymentComponent
              value={job.shipmentCost || 'cost not set'}
              text="Traveler will be paid on delivery"
            />
          </View>

          <View style={styles.detailsIconsContainer}>
            <View style={styles.detailsIconContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcon
                  name="wallet-giftcard"
                  size={30}
                  color="#87CEEB"
                />
              </View>
              <View>
                <Text style={styles.iconText}>{job.itemSize}</Text>
              </View>
            </View>
            <View style={styles.detailsIconContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcon name="comment" size={30} color="#87CEEB" />
              </View>
              <View>
                <Text style={styles.iconText}>
                  {job.itemWeight?.weight.text}
                </Text>
              </View>
            </View>
            <View style={styles.detailsIconContainer}>
              <View style={styles.iconContainer}>
                <MaterialComIcon
                  name="calendar-range"
                  size={30}
                  color="#87CEEB"
                />
              </View>
              <View>
                <Text style={styles.iconText}>
                  {/* @ts-ignore */}
                  By {new Date(job.itemDeliveryDate?.toDate()).toDateString()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ownerContainer}>
            <View style={styles.ownerHeaderContainer}>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitleText}>Sender</Text>
              </View>
              <Pressable onPress={() => console.log('chat')}>
                <View style={styles.headerChatContainer}>
                  <View style={styles.headerChatIcon}>
                    <MaterialIcon name="chat" size={30} color="#e91e63" />
                  </View>
                  <View style={styles.headerChatTextContainer}>
                    <Text style={styles.headerChatText}>Chat</Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View style={styles.oSenderInfoContainer}>
              <View style={styles.oSenderInfoImageContainer}>
                <Image
                  style={styles.oSenderInfoImage}
                  resizeMode="cover"
                  // eslint-disable-next-line global-require, import/no-dynamic-require
                  source={require('../../../assets/images/mango.jpg')}
                />
              </View>
              <View style={styles.oSenderInfoDetailsContainer}>
                <View>
                  <Text style={styles.oSenderInfoDetailsText}>
                    {job.ownerName}
                  </Text>
                </View>
                <View style={styles.oSenderInfoReviewContainer}>
                  <View style={styles.oSenderInfoReviewIcon}>
                    <StarIcon name="star" size={20} color="#e91e63" />
                  </View>
                  <View style={styles.oSenderInfoReviewTextContainer}>
                    <Text style={styles.oSenderInfoReviewText}>
                      4.5 (4 reviews)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.oSenderInfoNoteTitle}>
                  Note by Juan Cuadrado
                </Text>
              </View>
              <View>
                <Text style={styles.oSenderInfoNote}>{job.note}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.oSenderInfoButtonsContainer}>
          <WideButton
            buttonText="Request to Carry This Package"
            onPressHandler={() => {
              NavigationService.navigate('SearchJobRequest', job);
              console.log('request to carry package');
            }}
            isSelected
            btnBackgoundColor="#e91e63"
            btnTextColor="white"
            btnBorderColor="#e91e63"
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default SearchJobScreen;
