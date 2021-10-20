import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

interface NumberTogglerProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
// interface ToggleButtonProps {
//   isMinus: boolean;
//   onPress: (isMinus: boolean) => void;
// }

// const ToggleButton = ({ isMinus, onPress }: ToggleButtonProps) => {
//   const icon = () => (
//     <Text style={styles.buttonText}>{isMinus ? '—' : '+'}</Text>
//   );
//   return (
//     <TouchableOpacity
//       style={[styles.touchable]}
//       onPress={() => onPress(isMinus)}
//     >
//       {icon()}
//     </TouchableOpacity>
//   );
// };

const NumberToggler: React.FC<NumberTogglerProps> = ({ count, setCount }) => {
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
    console.log(newCount);
  };

  // const onPress = (isMinus: boolean) => {
  //   let newCount = 0;
  //   if (isMinus) {
  //     if (count - 1 <= minCount) {
  //       newCount = minCount;
  //     } else {
  //       newCount = count - 1;
  //     }
  //   } else if (count + 1 >= maxCount) {
  //     newCount = maxCount;
  //   } else {
  //     newCount = count + 1;
  //   }
  //   setCount(newCount);
  // };
  return (
    <View style={styles.container}>
      {/* <ToggleButton isMinus onPress={onPress} /> */}
      <View style={styles.count}>
        <TextInput
          style={styles.countText}
          onChangeText={handleInputChange}
          value={count.toString()}
        />
      </View>
      {/* <ToggleButton isMinus={false} onPress={onPress} /> */}
    </View>
  );
};
export default NumberToggler;
