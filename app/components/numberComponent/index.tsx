import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

interface NumberComponentProps {
  count: number;
  setCount:
    | React.Dispatch<React.SetStateAction<number>>
    | ((itemValue: number) => void);
}

const NumberComponent: React.FC<NumberComponentProps> = ({
  count,
  setCount
}) => {
  const minCount = 0;
  const maxCount = 500;

  const handleInputChange = (e: string) => {
    let newCount = 0;
    if (e === '') {
      newCount = 0;
    } else if (typeof parseInt(e, 10) !== 'number') {
      newCount = 0;
    } else if (parseInt(e, 10) < minCount) {
      newCount = minCount;
    } else if (parseInt(e, 10) > maxCount) {
      newCount = maxCount;
    } else {
      newCount = parseInt(e, 10);
    }
    setCount(newCount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <TextInput
          style={styles.countText}
          onChangeText={handleInputChange}
          value={count.toString()}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};
export default NumberComponent;
