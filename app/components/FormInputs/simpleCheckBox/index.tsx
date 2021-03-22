import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface SimpleCheckBoxItemProps {
  headerText: string;
}

const SimpleCheckBoxItem: React.FC<SimpleCheckBoxItemProps> = ({
  headerText
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
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};
export default SimpleCheckBoxItem;
