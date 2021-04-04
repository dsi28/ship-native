import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IJob } from '../../../models/IJob';
import styles from './styles';

interface ItemComponentProps {
  onPressHandler: () => void;
  jobItem: IJob;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  onPressHandler,
  jobItem
}) => {
  console.log('item comp: ', jobItem);
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.cardItemContainer}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ marginRight: 10 }}>
            <View style={styles.avatarView}>
              {/* <Text style={styles.avatarLetter}>D</Text> */}
              <Image
                style={{ height: 90, width: 90 }}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={{ uri: jobItem.itemImages }}
              />
            </View>
            <View style={styles.flexDirectionRow}>
              <View
                style={{
                  ...styles.iconView,
                  ...{ marginRight: 0 }
                }}
              >
                <MaterialIcon name="location-pin" size={20} color="#e91e63" />
              </View>
              <View>
                <Text style={styles.fontSize15}>100 Miles</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.cardDetailsView}>
              <View style={styles.topRow}>
                <View style={{ flexDirection: 'column' }}>
                  <View>
                    <Text
                      style={{
                        ...styles.fontSize17,
                        ...{ fontWeight: 'bold', color: '#e91e63' }
                      }}
                    >
                      {jobItem.itemName}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View>
                      <Text style={{ fontSize: 15, color: 'gray' }}>To:</Text>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ fontSize: 15, color: 'black' }}>
                        {jobItem.itemDeliveryLocation}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View>
                      <Text style={{ fontSize: 15, color: 'gray' }}>Size:</Text>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ fontSize: 15, color: 'black' }}>
                        {jobItem.itemSize}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View>
                      <Text style={{ fontSize: 15, color: 'gray' }}>
                        Delivery by:
                      </Text>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                      <Text style={{ fontSize: 15, color: 'black' }}>
                        {
                          // eslint-disable-next-line no-nested-ternary
                          typeof jobItem?.itemDeliveryDate !== undefined
                            ? typeof jobItem?.itemDeliveryDate === 'object'
                              ? jobItem?.itemDeliveryDate.toDateString() // newJob.itemDeliveryDate?.toDateString()
                              : new Date(
                                  jobItem?.itemDeliveryDate
                                ).toDateString() // this is a mess
                            : 'No date set'
                        }
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
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
};
export default ItemComponent;
