import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IJob } from '../../../models/IJob';
import styles from './styles';

interface ItemComponentProps {
  onPressHandler: (job: IJob) => void;
  jobItem: IJob;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  onPressHandler,
  jobItem
}) => (
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
              <Text style={styles.fontSize15}>100 Miles</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardItemSection2}>
          <View style={styles.cardDetailsView}>
            <View style={styles.topRow}>
              <View style={styles.topRowSubContainer}>
                <View>
                  <Text style={styles.itemNameText}>{jobItem.itemName}</Text>
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
                      {
                        jobItem?.itemDeliveryDate
                        // // eslint-disable-next-line no-nested-ternary
                        // typeof jobItem?.itemDeliveryDate !== undefined
                        //   ? typeof jobItem?.itemDeliveryDate === 'object'
                        //     ? jobItem?.itemDeliveryDate.toDateString()
                        //     : // @ts-ignore
                        //       new Date(jobItem?.itemDeliveryDate).toDateString() // this is a mess
                        //   : 'No date set'
                      }
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.costTextValue}>
                  ${jobItem.shipmentCost}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Pressable>
);
export default ItemComponent;
