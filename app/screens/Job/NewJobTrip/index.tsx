import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

const PayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        buttonStyle={styles.addButton}
        icon={
          <MaterialCommunityIcons
            name="plus-circle"
            color="#e91e63"
            size={50}
          />
        }
      />
      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Create</Text>
            </View>
            <Pressable
              onPress={() => {
                setModalVisible(false);
                NavigationService.navigate('Home', {
                  screen: 'New Job'
                  // initial: false
                });
              }}
              style={styles.pressable}
            >
              {({ pressed }) => (
                <View
                  style={{
                    width: '100%',
                    opacity: pressed ? 0.8 : 1,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Feather name="box" color="#e91e63" size={40} />
                  </View>
                  <View style={styles.pressableSubContainer}>
                    <Text
                      style={{
                        opacity: pressed ? 0.8 : 1,
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}
                    >
                      Ship Item
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(false);
                NavigationService.navigate('Home', {
                  screen: 'Add Trip'
                  // initial: false
                });
              }}
              style={styles.pressableBottom}
            >
              {({ pressed }) => (
                <View
                  style={{
                    width: '100%',
                    opacity: pressed ? 0.8 : 1,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Ionicons name="airplane" color="#e91e63" size={40} />
                  </View>
                  <View style={styles.pressableSubContainer}>
                    <Text
                      style={{
                        opacity: pressed ? 0.8 : 1,
                        fontSize: 20,
                        fontWeight: 'bold'
                      }}
                    >
                      Add Trip
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default PayScreen;
