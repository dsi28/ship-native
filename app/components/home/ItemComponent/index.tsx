import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface ItemComponentProps {
  onPressHandler: () => void;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ onPressHandler }) => (
  <Pressable onPress={onPressHandler}>
    <View style={styles.cardItemContainer}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{ marginRight: 10 }}>
          <View style={styles.avatarView}>
            {/* TODO get seller profile pic or initial */}
            <Text style={styles.avatarLetter}>D</Text>
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
                  {/* TODO get item name */}
                  <Text
                    style={{
                      ...styles.fontSize17,
                      ...{ fontWeight: 'bold', color: '#e91e63' }
                    }}
                  >
                    Alphanso Mangoes
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  {/* TODO get destination */}
                  <View>
                    <Text style={{ fontSize: 15, color: 'gray' }}>To:</Text>
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
                    <Text style={{ fontSize: 15, color: 'gray' }}>Size:</Text>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Large</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  {/* TODO get delivery date */}
                  <View>
                    <Text style={{ fontSize: 15, color: 'gray' }}>
                      Delivery by:
                    </Text>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>
                      Jul 22, 2019
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                {/* TODO get bid price */}
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$60</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Pressable>
);
export default ItemComponent;
