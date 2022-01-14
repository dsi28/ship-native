import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface SimpleCheckBoxItemProps {
  headerText: string;
  valueName: number;
  isSelected: boolean;
  onChange: (newValue: number) => void;
}

const SimpleCheckBoxItem: React.FC<SimpleCheckBoxItemProps> = ({
  headerText,
  valueName,
  isSelected,
  onChange
}) => (
  <View style={styles.container}>
    <View style={styles.checkBoxContainer}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={() => onChange(valueName)}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  </View>
);
export default SimpleCheckBoxItem;
