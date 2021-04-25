import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface MainProfileItemProps {
  onPressHandler: () => void;
  iconName: string;
  itemName: string;
}

const MainProfileItem: React.FC<MainProfileItemProps> = ({
  onPressHandler,
  iconName,
  itemName
}) => (
  <View style={styles.container}>
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
