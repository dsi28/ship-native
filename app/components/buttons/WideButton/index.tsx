import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface WideButtonProps {
  buttonText: string;
  onPressHandler: () => void;
  isSelected: boolean;
}

const WideButton: React.FC<WideButtonProps> = ({
  buttonText,
  onPressHandler,
  isSelected
}) => (
  <Pressable
    onPress={() => {
      onPressHandler();
    }}
    style={{
      ...styles.pressableNext,
      ...{
        backgroundColor: isSelected ? '#e91e63' : 'transparent'
      }
      // change this color to another color that not black or gray
    }}
  >
    <Text style={styles.pressableNextTxt}>{buttonText}</Text>
  </Pressable>
);

export default WideButton;
