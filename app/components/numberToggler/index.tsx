import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface NumberTogglerProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
interface ToggleButtonProps {
  isMinus: boolean;
  onPress: (isMinus: boolean) => void;
}

const ToggleButton = ({ isMinus, onPress }: ToggleButtonProps) => {
  const icon = () => (
    <Text style={styles.buttonText}>{isMinus ? '—' : '+'}</Text>
  );
  return (
    <TouchableOpacity
      style={[styles.touchable]}
      onPress={() => onPress(isMinus)}
    >
      {icon()}
    </TouchableOpacity>
  );
};

const NumberToggler: React.FC<NumberTogglerProps> = ({ count, setCount }) => {
  const minCount = 0;
  const maxCount = 500;

  const onPress = (isMinus: boolean) => {
    let newCount = 0;
    if (isMinus) {
      if (count - 1 <= minCount) {
        newCount = minCount;
      } else {
        newCount = count - 1;
      }
    } else if (count + 1 >= maxCount) {
      newCount = maxCount;
    } else {
      newCount = count + 1;
    }
    setCount(newCount);
  };
  return (
    <View style={styles.container}>
      <ToggleButton isMinus onPress={onPress} />
      <View style={styles.count}>
        <Text style={styles.countText}>${count}</Text>
      </View>
      <ToggleButton isMinus={false} onPress={onPress} />
    </View>
  );
};
export default NumberToggler;
