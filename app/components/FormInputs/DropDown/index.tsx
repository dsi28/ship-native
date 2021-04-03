import React from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

interface DropDownFormInputProps {
  labelText: string;
  placeholderText: string;
  itemList: {
    label: string;
    value: string;
  }[];
  onChangeHandler: (
    newCategory:
      | 'category 1'
      | 'category 2'
      | 'category 3'
      | 'category 4'
      | 'category 5'
  ) => void;
  inputValue:
    | 'category 1'
    | 'category 2'
    | 'category 3'
    | 'category 4'
    | 'category 5'
    | null;
  //   isSelected: boolean;
  //   btnBackgoundColor: string;
  //   btnTextColor: string;
  //   btnBorderColor: string;
}

const DropDownFormInput: React.FC<DropDownFormInputProps> = ({
  labelText,
  placeholderText,
  itemList,
  onChangeHandler,
  inputValue
}) => {
  console.log('input val', inputValue);
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View style={styles.dropDownItemContainer}>
        <DropDownPicker
          items={itemList}
          containerStyle={styles.dropDownContainer}
          style={styles.dropDownStyles}
          itemStyle={styles.dropDownItemStyle}
          labelStyle={styles.dropDownLabelStyle}
          dropDownStyle={styles.dropDownDropDownStyle}
          defaultValue={inputValue}
          onChangeItem={(item: {
            label: string;
            value:
              | 'category 1'
              | 'category 2'
              | 'category 3'
              | 'category 4'
              | 'category 5';
          }) => {
            console.log(item);
            onChangeHandler(item.value);
          }}
          placeholder={placeholderText}
        />
      </View>
    </View>
  );
};

export default DropDownFormInput;
