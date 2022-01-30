import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface WideButtonProps {
  buttonText: string;
  onPressHandler: () => void;
  isSelected: boolean;
  btnBackgoundColor: string;
  btnTextColor: string;
  btnBorderColor: string;
  disabled?: boolean;
}

const WideButton: React.FC<WideButtonProps> = ({
  buttonText,
  onPressHandler,
  isSelected,
  btnBackgoundColor,
  btnTextColor,
  btnBorderColor,
  disabled = false
}) => (
  // const temp = false;
  <Pressable
    onPress={() => {
      onPressHandler();
    }}
    disabled={disabled}
    style={{
      ...styles.pressableNext,
      ...{
        backgroundColor: isSelected ? btnBackgoundColor : 'transparent',
        borderColor: btnBorderColor
      }
      // change this color to another color that not black or gray
    }}
  >
    {({ pressed }) => (
      <Text
        style={{
          opacity: pressed ? 0.8 : 1,
          fontSize: 20,
          fontWeight: 'bold',
          color: btnTextColor
        }}
      >
        {buttonText}
      </Text>
    )}
  </Pressable>
);
export default WideButton;
