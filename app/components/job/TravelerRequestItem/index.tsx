import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface TravelerRequestItemComponentProps {
  onPressHandler: () => void;
}

const TravelerRequestItemComponent: React.FC<TravelerRequestItemComponentProps> = ({
  onPressHandler
}) => (
  <Pressable onPress={onPressHandler}>
    <View style={styles.cardItemContainer}>
      <View style={styles.subContainer}>
        <View style={styles.marginRight30}>
          <View style={styles.avatarView}>
            {/* TODO get seller profile pic or initial */}
            <Image
              style={styles.travelerImage}
              // resizeMode="contain"
              resizeMode="cover"
              // eslint-disable-next-line global-require, import/no-dynamic-require
              source={require('../../../assets/images/mango.jpg')}
            />
          </View>
          <View style={styles.flexDirectionRow}>
            <View
              style={{
                ...styles.iconView,
                ...{ marginRight: 0 }
              }}
            >
              <MaterialIcon name="location-pin" size={20} color="#87CEEB" />
            </View>
            <View>
              <Text style={styles.fontSize15}>100 Miles</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.cardDetailsView}>
            <View style={styles.topRow}>
              <View style={styles.flexDirectionColumn}>
                <View style={styles.nameContainer}>
                  {/* TODO get item name */}
                  <Text style={styles.nameText}>James Rodriguez</Text>
                </View>
                <View style={styles.detailContainer}>
                  {/* TODO get destination */}
                  <View>
                    <Text style={styles.detailTitle}>Flying To:</Text>
                  </View>
                  <View style={styles.detailValueContainer}>
                    <Text style={styles.detailValueText}>California, USA</Text>
                  </View>
                </View>
                <View style={styles.detailContainer}>
                  {/* TODO get size */}
                  <View>
                    <Text style={styles.detailTitle}>Flying On:</Text>
                  </View>
                  <View style={styles.detailValueContainer}>
                    <Text style={styles.detailValueText}>Jul 22, 2019</Text>
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
export default TravelerRequestItemComponent;
