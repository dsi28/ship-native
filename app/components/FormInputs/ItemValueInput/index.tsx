import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

interface ItemValueInputProps {
  labelText: string;
  placeholderText: string;
  count: number;
  setCount:
    | React.Dispatch<React.SetStateAction<number>>
    | ((itemValue: number) => void);
}

const ItemValueInput: React.FC<ItemValueInputProps> = ({
  labelText,
  placeholderText,
  count,
  setCount
}) => {
  const minCount = 0;
  const maxCount = 500;

  const handleInputChange = (e: string) => {
    let newCount = 0;
    const amount = e.substring(2);
    if (amount === '') {
      newCount = 0;
    } else if (typeof parseInt(amount, 10) !== 'number') {
      newCount = 0;
    } else if (parseInt(amount, 10) < minCount) {
      newCount = minCount;
    } else if (parseInt(amount, 10) > maxCount) {
      newCount = maxCount;
    } else {
      newCount = parseInt(amount, 10);
    }
    setCount(newCount);
  };

  return (
    <View>
      <View>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={placeholderText}
          onChangeText={handleInputChange}
          value={`\u0024 ${count.toString()}`}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default ItemValueInput;
