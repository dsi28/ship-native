import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ITrip } from '../../../models/ITraveler';
import { IUser } from '../../../models/IUserProfile';
import { getTripFirebase } from '../../../services/trip';
import styles from './styles';

interface TravelerRequestItemComponentProps {
  onPressHandler: (traveler: IUser) => void;
  traveler: any;
  job: any;
}

const TravelerRequestItemComponent: React.FC<TravelerRequestItemComponentProps> = ({
  onPressHandler,
  traveler,
  job
}) => {
  const [trip, setTrip] = useState<ITrip>();

  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXX', traveler);
  console.log('yyyyyyyyyyyyyy', job);

  const getTravelerTrip = async () => {
    console.log('I LOVE YOU', traveler.tripId, ' ', traveler.uid);
    const temp: any = await getTripFirebase(traveler.uid, traveler.tripId);
    console.log('delete logging', temp);
    setTrip(temp);
  };

  useEffect(() => {
    console.log('test');
    // get the trip
    getTravelerTrip();
    console.log('Trip', trip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable onPress={() => onPressHandler(traveler)}>
      <View style={styles.cardItemContainer}>
        <View style={styles.subContainer}>
          <View style={styles.marginRight30}>
            <View style={styles.avatarView}>
              <Image
                style={styles.travelerImage}
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.cardDetailsView}>
              <View style={styles.topRow}>
                <View style={styles.flexDirectionColumn}>
                  <View style={styles.nameContainer}>
                    {/* TODO get item name */}
                    <Text style={styles.nameText}>{traveler.name}</Text>
                  </View>
                  <View style={styles.detailContainer}>
                    {/* TODO get destination */}
                    <View>
                      <Text style={styles.detailTitle}>Flying To:</Text>
                    </View>
                    <View style={styles.detailValueContainer}>
                      <Text style={styles.detailValueText}>
                        {trip?.arrivalCity}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.detailContainer}>
                    {/* TODO get size */}
                    <View>
                      <Text style={styles.detailTitle}>Flying On:</Text>
                    </View>
                    <View style={styles.detailValueContainer}>
                      <Text style={styles.detailValueText}>
                        {
                          // @ts-ignore
                          typeof trip?.date.seconds === 'number'
                            ? dayjs
                                // @ts-ignore
                                .unix(trip?.date.seconds)
                                .format('MMM DD YYYY')
                            : dayjs(
                                // @ts-ignore
                                trip?.date
                              ).format('MMM DD YYYY')
                        }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default TravelerRequestItemComponent;
