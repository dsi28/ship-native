import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

// interface HandleNextProps {
//   name?: string;
//   birthday?: string;
//   gender?: IGender;
//   role?: string;
//   showMe?: IGender;
//   pictures?: string[];
// }
interface NextButtonProps {
  buttonText: string;
  onPressHandler: () => void;
  isDisabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({
  buttonText,
  onPressHandler,
  isDisabled
}) => (
  <Pressable
    onPress={() => {
      console.log('presss');
      onPressHandler();
    }}
    style={{
      ...styles.pressableNext,
      ...{ backgroundColor: isDisabled ? 'lightgray' : 'black' }
    }}
    disabled={isDisabled}
  >
    <Text style={styles.pressableNextTxt}>{buttonText}</Text>
  </Pressable>
);

export default NextButton;
