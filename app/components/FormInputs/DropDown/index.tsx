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
  //   isSelected: boolean;
  //   btnBackgoundColor: string;
  //   btnTextColor: string;
  //   btnBorderColor: string;
}

const DropDownFormInput: React.FC<DropDownFormInputProps> = ({
  labelText,
  placeholderText,
  itemList
}) => (
  <View>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
    <View style={styles.dropDownItemContainer}>
      <DropDownPicker
        items={itemList}
        // defaultValue={this.state.country}
        containerStyle={styles.dropDownContainer}
        style={styles.dropDownStyles}
        itemStyle={styles.dropDownItemStyle}
        labelStyle={styles.dropDownLabelStyle}
        dropDownStyle={styles.dropDownDropDownStyle}
        onChangeItem={
          (item) => console.log(item)
          // this.setState({
          //   country: item.value
          // })
        }
        placeholder={placeholderText}
      />
    </View>
  </View>
);

export default DropDownFormInput;
