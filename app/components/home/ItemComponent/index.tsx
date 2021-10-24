import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IJob } from '../../../models/IJob';
import styles from './styles';

interface ItemComponentProps {
  onPressHandler: (job: IJob) => void;
  jobItem: IJob;
  isOwner: boolean;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  onPressHandler,
  jobItem,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isOwner
}) => {
  const [dateTemp, setDateTemp] = useState('');

  const getDate = (): string => {
    if (jobItem?.itemDeliveryDate !== undefined) {
      if (
        typeof jobItem?.itemDeliveryDate === 'object' &&
        // @ts-ignore
        typeof jobItem?.itemDeliveryDate.toDate !== 'undefined'
      ) {
        return (
          jobItem?.itemDeliveryDate
            // @ts-ignore
            .toDate()
            .toDateString()
            .toString()
        );
      }
      return new Date(
        // @ts-ignore
        jobItem?.itemDeliveryDate
      )
        .toDateString()
        .toString();
    }
    return 'No date set';
  };

  useEffect(() => {
    setDateTemp(getDate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable onPress={() => onPressHandler(jobItem)}>
      <View style={styles.cardItemContainer}>
        <View style={styles.cardItemSubContainer}>
          <View style={styles.cardItemSection}>
            <View style={styles.avatarView}>
              <Image
                style={styles.cardItemImage}
                resizeMode="cover"
                source={{ uri: jobItem.itemImages }}
              />
            </View>
            <View style={styles.flexDirectionRow}>
              <View style={styles.iconView}>
                <MaterialIcon name="location-pin" size={20} color="#e91e63" />
              </View>
              <View>
                <Text style={styles.fontSize15}>
                  {jobItem.itemPickupLocation}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardItemSection2}>
            <View style={styles.cardDetailsView}>
              <View style={styles.topRow}>
                <View style={styles.topRowSubContainer}>
                  <View style={styles.jobNCostName}>
                    <View>
                      <Text style={styles.itemNameText}>
                        {jobItem.itemName}
                      </Text>
                    </View>
                    <View style={styles.costView}>
                      <Text style={styles.costTextValue}>
                        ${jobItem.shipmentCost}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.itemPropertyContainer}>
                    <View>
                      <Text style={styles.itemPropertyLabelText}>To:</Text>
                    </View>
                    <View style={styles.itemPropertyValueContainer}>
                      <Text style={styles.itemPropertyValueText}>
                        {jobItem.itemDeliveryLocation}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.itemPropertyContainer}>
                    <View>
                      <Text style={styles.itemPropertyLabelText}>Size:</Text>
                    </View>
                    <View style={styles.itemPropertyValueContainer}>
                      <Text style={styles.itemPropertyValueText}>
                        {jobItem.itemSize}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.itemPropertyContainer}>
                    <View>
                      <Text style={styles.itemPropertyLabelText}>
                        Delivery by:
                      </Text>
                    </View>
                    <View style={styles.itemPropertyValueContainer}>
                      <Text style={styles.itemPropertyValueText}>
                        {dateTemp}
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
export default ItemComponent;
