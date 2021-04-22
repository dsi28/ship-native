import React from 'react';
import { Pressable, Text } from 'react-native';
import NavigationService from '../../navigation/NavigationService';

interface NavigationLinkComponentProps {
  navigateTo: string;
  textColor: string;
  linkText: string;
}

const NavigationLinkComponent: React.FC<NavigationLinkComponentProps> = ({
  navigateTo,
  textColor = 'green',
  linkText
}) => (
  <Pressable
    onPress={() => {
      NavigationService.navigate(navigateTo);
    }}
  >
    {({ pressed }) => (
      <Text
        style={{
          opacity: pressed ? 0.8 : 1,
          color: textColor,
          fontSize: 20
        }}
      >
        {linkText}
      </Text>
    )}
  </Pressable>
);

export default NavigationLinkComponent;
