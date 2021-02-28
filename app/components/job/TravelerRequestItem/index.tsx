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
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{ marginRight: 30 }}>
          <View style={styles.avatarView}>
            {/* TODO get seller profile pic or initial */}
            <Image
              style={{ height: 90, width: 90, borderRadius: 45 }}
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.cardDetailsView}>
            <View style={styles.topRow}>
              <View style={{ flexDirection: 'column' }}>
                <View>
                  {/* TODO get item name */}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'orange',
                      fontSize: 20
                    }}
                  >
                    James Rodriguez
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  {/* TODO get destination */}
                  <View>
                    <Text style={{ fontSize: 15, color: 'gray' }}>
                      Flying To:
                    </Text>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                      California, USA
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  {/* TODO get size */}
                  <View>
                    <Text style={{ fontSize: 15, color: 'gray' }}>
                      Flying On:
                    </Text>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                      Jul 22, 2019
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
export default TravelerRequestItemComponent;
