import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

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
      onPressHandler();
    }}
    style={{
      ...styles.pressableNext,
      ...{ backgroundColor: isDisabled ? 'lightgray' : '#87CEEB' }
    }}
    disabled={isDisabled}
  >
    {({ pressed }) => (
      <Text
        style={{
          opacity: pressed ? 0.8 : 1,
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {buttonText}
      </Text>
    )}
  </Pressable>
);

export default NextButton;
