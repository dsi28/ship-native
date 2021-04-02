import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface CheckBoxItemProps {
  headerText: string;
  subHeaderText: string;
  valueName: 'small' | 'medium' | 'large' | 'extra large';
  isSelected: boolean;
  onChange: (newValue: 'small' | 'medium' | 'large' | 'extra large') => void;
}

const CheckBoxItem: React.FC<CheckBoxItemProps> = ({
  headerText,
  subHeaderText,
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>{subHeaderText}</Text>
      </View>
    </View>
  </View>
);
export default CheckBoxItem;
