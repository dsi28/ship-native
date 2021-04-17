import React from 'react';
import { Pressable, Text } from 'react-native';
import NavigationService from '../../navigation/NavigationService';

interface NavigationLinkComponentProps {
  navigateTo: string;
  textColor: string;
  linkText: string;
  // onChangeHandler: (propertyName: string, propertyValue: string) => void;
  // propertyName: 'itemName' | 'itemValue' | 'name' | 'email' | 'password';
  // inputValue: string | number | undefined; // @TODO come back to this
}

const NavigationLinkComponent: React.FC<NavigationLinkComponentProps> = ({
  navigateTo,
  textColor = 'green',
  linkText
}) => (
  <Pressable
    onPress={() => {
      console.log(navigateTo);
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
