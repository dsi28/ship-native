import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface ReadMoreProps {
  fullText: string;
  maxLength?: number;
}

const ReadMoreComponent: React.FC<ReadMoreProps> = ({
  fullText,
  maxLength = 100
}) => {
  const [isShownAll, setIsShownAll] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textFont}>
        {isShownAll ? fullText : fullText.slice(0, maxLength)}
      </Text>
      <Pressable onPress={() => setIsShownAll(!isShownAll)}>
        <Text style={styles.showMoreText}>
          {isShownAll ? 'show less' : 'show more'}
        </Text>
      </Pressable>
    </View>
  );
};
export default ReadMoreComponent;
