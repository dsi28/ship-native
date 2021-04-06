import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface TextFormInputProps {
  labelText: string;
  placeholderText: string;
  onChangeHandler: (propertyName: string, propertyValue: string) => void;
  propertyName: 'itemName' | 'itemValue' | 'name' | 'email';
  inputValue: string | number | undefined; // @TODO come back to this
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
        // @ts-ignore
        value={inputValue}
      />
    </View>
  </View>
);

export default TextFormInput;
