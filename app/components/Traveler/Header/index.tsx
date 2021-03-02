import React from 'react';
import { Image, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface TravelerHeaderComponentProps {}

const TravelerHeaderComponent: React.FC<TravelerHeaderComponentProps> = () => (
  <View style={{ alignItems: 'center' }}>
    <View style={styles.avatarView}>
      {/* TODO get seller profile pic or initial */}
      <Image
        style={styles.travelerImage}
        // resizeMode="contain"
        resizeMode="cover"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        source={require('../../../assets/images/mango.jpg')}
      />
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>James Rodriguez</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5
        }}
      >
        <MaterialIcon name="star" size={20} color="mediumvioletred" />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* TODO get review average + number of reviews */}
        <Text style={{ fontSize: 20, color: 'gray' }}>4.5 (4)</Text>
      </View>
    </View>
  </View>
);
export default TravelerHeaderComponent;
