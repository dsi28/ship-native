import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface TextFormInputProps {
  labelText: string;
  placeholderText: string;
  onChangeHandler: (propertyName: string, propertyValue: string) => void;
  propertyName: 'itemName' | 'itemValue';
  inputValue: string | number;
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
        // value={nameInput}
        onChangeText={(e) => {
          console.log(e);
          onChangeHandler(propertyName, e);
          // setNameInput(e);
        }}
        value={inputValue}
      />
    </View>
  </View>
);

export default TextFormInput;
