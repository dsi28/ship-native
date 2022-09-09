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
  originLocationFilter: string;
  setOriginLocationFilter: React.Dispatch<React.SetStateAction<string>>;
  updateFilterJobs: () => Promise<void>;
}

const FilterModal: React.FC<FilterModalProps> = ({
  modalVisible,
  setModalVisible,
  deliveryLocationFilter,
  setDeliveryLocationFilter,
  originLocationFilter,
  setOriginLocationFilter,
  updateFilterJobs
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
          <View style={styles.filterContainer}>
            <View>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcon name="close" size={35} color="#87CEEB" />
              </Pressable>
            </View>
            <View>
              <Text style={styles.titleText}>Location</Text>
            </View>
            <View>
              {/* this is a place holder so that flex row can be used for left icon and center text */}
              <MaterialIcon name="close" size={35} color="white" />
            </View>
          </View>
          <View style={styles.locationFilterContainer}>
            <SearchFilter
              filter={deliveryLocationFilter}
              setFilter={setDeliveryLocationFilter}
              filterName="Delivery Location"
              filterPlaceholder="Enter city"
            />
          </View>
          <View style={styles.locationFilterContainer}>
            <SearchFilter
              filter={originLocationFilter}
              setFilter={setOriginLocationFilter}
              filterName="Origin Location"
              filterPlaceholder="Enter city"
            />
          </View>
          <NextButton
            buttonText="Update Filter"
            onPressHandler={() => {
              updateFilterJobs();
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
