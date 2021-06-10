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
    | 'arrivalCity';
  inputValue: string | number; // had undefined here too
}

const TextFormInput: React.FC<TextFormInputProps> = ({
  labelText,
  placeholderText,
  onChangeHandler,
  propertyName,
  inputValue
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
          console.log('change text form input: ', e);
          onChangeHandler(propertyName, e);
        }}
        // @ts-ignore
        value={inputValue}
      />
    </View>
  </View>
);

export default TextFormInput;
