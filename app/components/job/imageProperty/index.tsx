import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface ImagePropertyComponentProps {
  title: string;
  value: string | undefined;
}

const ImagePropertyComponent: React.FC<ImagePropertyComponentProps> = ({
  title,
  value
}) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{title}:</Text>
    <View style={styles.imagesContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          resizeMode="cover"
          source={
            typeof value === undefined
              ? // eslint-disable-next-line global-require
                require('../../../assets/images/mango.jpg')
              : { uri: value }
          }
        />
      </View>
    </View>
  </View>
);
// TODO add keys when using an array
export default ImagePropertyComponent;
