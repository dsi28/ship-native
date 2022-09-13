import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface MainProfileItemProps {
  onPressHandler: () => void;
  iconName: string;
  itemName: string;
  bluredItem: boolean;
}

const MainProfileItem: React.FC<MainProfileItemProps> = ({
  onPressHandler,
  iconName,
  itemName,
  bluredItem
}) => (
  <View
    style={bluredItem ? [styles.container, { opacity: 0.5 }] : styles.container}
  >
    <Pressable
      onPress={() => {
        onPressHandler();
      }}
    >
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.itemText}>{itemName}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MIcons name={iconName} size={30} color="gray" />
        </View>
      </View>
    </Pressable>
  </View>
);
export default MainProfileItem;
