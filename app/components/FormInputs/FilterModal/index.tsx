import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface FilterModalProps {
  modalVisible: boolean;
  setModalVisible: any; // @TODO change this
}

const FilterModal: React.FC<FilterModalProps> = ({
  modalVisible,
  setModalVisible
}) => (
  <View>
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  </View>
);

export default FilterModal;
