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
  data: string; // string[];
}
const CarouselSection: React.FC<CarouselSectionProps> = ({ data }) => {
  // const scrollX = new Animated.Value(0);
  console.log('data pic profile', data);
  // if (data && data.length > 1) {
  //   return (
  //     <View>
  //       <FlatList
  //         data={data}
  //         //   ref={(fList) => {
  //         //     flatList = fList;
  //         //   }}
  //         keyExtractor={(item, index) => `key${index}`}
  //         horizontal
  //         pagingEnabled
  //         scrollEnabled
  //         snapToAlignment="center"
  //         scrollEventThrottle={16}
  //         decelerationRate="fast"
  //         showsHorizontalScrollIndicator={false}
  //         renderItem={({ item }) => <CarouselItem item={item} />}
  //         // TODO remove the { useNativeDriver: false } and we get a warning
  //         onScroll={Animated.event(
  //           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
  //           { useNativeDriver: false }
  //         )}
  //       />
  //     </View>
  //   );
  // }
  if (data && data.length) {
    // @ts-ignore
    return <CarouselItem item={data} />;
  }

  console.log('Please provide Images');
  return null;
};

export default CarouselSection;
