import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
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
          <View
            style={{
              marginTop: 20,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20
            }}
          >
            <View>
              <MaterialIcon name="close" size={35} color="#e91e63" />
            </View>
            <View
              style={{
                alignSelf: 'center'
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  fontWeight: 'bold'
                }}
              >
                Location
              </Text>
            </View>
            <View>
              {/* this is a place holder so that flex row can be used for left icon and center text */}
              <MaterialIcon name="close" size={35} color="white" />
            </View>
          </View>
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
