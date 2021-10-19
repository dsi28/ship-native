import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NextButton from '../../buttons/NextButton';
import SearchFilter from '../../search/SearchFilter';
import styles from './styles';

interface FilterModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  deliveryLocationFilter: string;
  setDeliveryLocationFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterModal: React.FC<FilterModalProps> = ({
  modalVisible,
  setModalVisible,
  deliveryLocationFilter,
  setDeliveryLocationFilter
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
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcon name="close" size={35} color="#e91e63" />
              </Pressable>
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
          <View
            style={{
              width: '100%',
              marginBottom: 20
            }}
          >
            <SearchFilter
              filter={deliveryLocationFilter}
              setFilter={setDeliveryLocationFilter}
              filterName="Delivery Location"
              filterPlaceholder="Enter city"
            />
          </View>
          <NextButton
            buttonText="update filter"
            onPressHandler={() => {
              setModalVisible(!modalVisible);
            }}
            isDisabled={false}
          />
        </View>
      </View>
    </Modal>
  </View>
);

export default FilterModal;
