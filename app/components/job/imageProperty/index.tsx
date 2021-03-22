import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface ImagePropertyComponentProps {
  title: string;
  value: string[];
}

const ImagePropertyComponent: React.FC<ImagePropertyComponentProps> = ({
  title,
  value
}) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{title}:</Text>
    <View style={styles.imagesContainer}>
      {
        // TODO add keys
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        value.map((image) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyles}
              // resizeMode="contain"
              resizeMode="cover"
              // eslint-disable-next-line global-require, import/no-dynamic-require
              source={require('../../../assets/images/mango.jpg')}
            />
          </View>
        ))
      }
    </View>
  </View>
);
export default ImagePropertyComponent;
