import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface ReceiverInputProps {
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
  inputValue: boolean; // had undefined here too
}

const TextFormInput: React.FC<ReceiverInputProps> = ({
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
          onChangeHandler(propertyName, e);
        }}
        // @ts-ignore
        value={inputValue}
      />
    </View>
  </View>
);

export default TextFormInput;
