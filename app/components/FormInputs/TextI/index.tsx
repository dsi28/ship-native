import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface TextFormInputProps {
  labelText: string;
  placeholderText: string;
  onChangeHandler: (propertyName: string, propertyValue: string) => void;
  propertyName:
    | 'itemName'
    | 'itemValue'
    | 'name'
    | 'email'
    | 'password'
    | 'departureCity'
    | 'flightNumber'
    | 'arrivalCity';
  inputValue: string | number | boolean; // had undefined here too
  isPassword: boolean;
}

const TextFormInput: React.FC<TextFormInputProps> = ({
  labelText,
  placeholderText,
  onChangeHandler,
  propertyName,
  inputValue,
  isPassword
}) => (
  <View>
    <View>
      <Text style={styles.labelText}>{labelText}</Text>
    </View>
    <View style={styles.inputTextContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholderText}
        onChangeText={(e) => {
          onChangeHandler(propertyName, e);
        }}
        secureTextEntry={isPassword}
        // @ts-ignore
        value={inputValue}
      />
    </View>
  </View>
);

export default TextFormInput;
