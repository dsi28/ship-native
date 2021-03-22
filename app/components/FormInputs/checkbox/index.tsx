import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface CheckBoxItemProps {
  headerText: string;
  subHeaderText: string;
}

const CheckBoxItem: React.FC<CheckBoxItemProps> = ({
  headerText,
  subHeaderText
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
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
};
export default CheckBoxItem;
