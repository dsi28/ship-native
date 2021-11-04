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
  propertyName:
    | 'itemDeliveryLocation'
    | 'itemDeliveryDate'
    | 'itemPickupLocation';
  inputValue: string | any;
  inputDisabled: boolean;
}

const TextFormInputWithIcon: React.FC<TextFormInputWithIconProps> = ({
  labelText,
  placeholderText,
  iconName,
  onChangeHandler,
  propertyName,
  inputValue,
  inputDisabled = true
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
        editable={inputDisabled}
        style={styles.inputText}
        placeholder={placeholderText}
        value={inputValue}
        onChangeText={(e) => {
          onChangeHandler(propertyName, e);
        }}
      />
    </View>
  </View>
);

export default TextFormInputWithIcon;
