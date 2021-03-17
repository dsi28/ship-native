import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface TextFormInputProps {
  labelText: string;
  placeholderText: string;

  //   isSelected: boolean;
  //   btnBackgoundColor: string;
  //   btnTextColor: string;
  //   btnBorderColor: string;
}

const TextFormInput: React.FC<TextFormInputProps> = ({
  labelText,
  placeholderText
}) => (
  <View style={styles.container}>
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
          // setNameInput(e);
        }}
      />
    </View>
  </View>
);

export default TextFormInput;
