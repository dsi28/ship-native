import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

interface CarouselItemProps {
  item: string; // remove ? when we pass user here
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => (
  <View style={styles.cardView}>
    <Image style={styles.image} source={{ uri: item }} />
  </View>
);

interface CarouselSectionProps {
  data: string;
}
const CarouselSection: React.FC<CarouselSectionProps> = ({ data }) => {
  if (data && data.length) {
    return <CarouselItem item={data} />;
  }
  console.log('Please provide Images');
  return null;
};

export default CarouselSection;
