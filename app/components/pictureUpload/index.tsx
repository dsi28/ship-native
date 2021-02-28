import React from 'react';
import { Image, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles';

interface PictureUploadProps {
  handleImageChange: () => void;
  imageShown?: string;
  imageIndex?: number;
}

const PictureUploadComponent: React.FC<PictureUploadProps> = ({
  handleImageChange,
  imageShown,
  imageIndex
}) => {
  console.log('Test', imageShown);
  return (
    // TODO print image shown
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageShown && (
          <Image
            style={styles.imagePhoto}
            // resizeMode="contain"
            resizeMode="cover"
            source={{
              uri: imageShown
            }}
          />
        )}
      </View>

      {/* @ts-ignore */}
      <IconButton
        icon={imageShown ? 'circle' : 'circle'}
        size={30}
        style={styles.iconToggle}
        color="white"
        // onPress={() => console.log('press plus')}
      />
      {/* @ts-ignore */}
      <IconButton
        icon={imageShown ? 'minus-circle' : 'plus-circle'}
        size={30}
        style={styles.iconToggle}
        color="#e91e63"
        onPress={() => {
          console.log('press plus outline');
          if (imageIndex) {
            console.log('index exsists');
            handleImageChange();
          } else {
            console.log('index not exsist');
            // @ts-ignore
            handleImageChange();
          }
        }}
      />
    </View>
  );
};
export default PictureUploadComponent;
