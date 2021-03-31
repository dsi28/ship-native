import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface TextFormInputWithIconProps {
  labelText: string;
  placeholderText: string;
  iconName: string;
  onChangeHandler: (propertyName: string, propertyValue: string) => void;
  propertyName: 'itemDeliveryLocation';
  inputValue: string;
  //   isSelected: boolean;
  //   btnBackgoundColor: string;
  //   btnTextColor: string;
  //   btnBorderColor: string;
}

const TextFormInputWithIcon: React.FC<TextFormInputWithIconProps> = ({
  labelText,
  placeholderText,
  iconName,
  onChangeHandler,
  propertyName,
  inputValue
}) => (
  <View>
    <View style={styles.labelIconContainer}>
      <View>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View>
        <MaterialIcon name={iconName} size={25} color="#e91e63" />
      </View>
    </View>
    <View style={styles.inputTextContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholderText}
        value={inputValue}
        onChangeText={(e) => {
          console.log(e);
          onChangeHandler(propertyName, e);
        }}
      />
    </View>
  </View>
);

export default TextFormInputWithIcon;
