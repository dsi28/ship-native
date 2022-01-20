import React from 'react';
import { Modal, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerRowHeaderComponent from '../../../components/Traveler/RowHeader';
import NavigationService from '../../../navigation/NavigationService';
import { cancelTravelerRequests } from '../../../services/jobs';
import styles from './styles';

interface DeclineTravlerProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  traveler: any;
  jobId: string;
}

const DeclineTravler: React.FC<DeclineTravlerProps> = ({
  showModal,
  setShowModal,
  traveler,
  jobId
}) => (
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.default);
  <View>
    <Modal
      animationType="slide"
      transparent
      visible={showModal}
      onRequestClose={() => {
        console.log('close');
      }}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <ScrollView style={styles.modalScroll}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Decline Request</Text>
            </View>
            <View style={styles.headerContainer}>
              <TravelerRowHeaderComponent
                name={traveler.name}
                image={traveler.pictures}
                review="4.5 (4)"
              />
            </View>
            <View style={styles.loctionsContainer}>
              <JobPropertyComponent
                title="Flying on"
                value="January 12, 2021"
              />
              <JobPropertyComponent title="Flying to" value="Florida, USA" />
            </View>
            <View style={styles.optionsContainer}>
              <View style={styles.topButtonContainer}>
                <WideButton
                  buttonText="Decline"
                  onPressHandler={() => {
                    setShowModal(false);
                    NavigationService.navigate('Job');
                    // services call to update traveler request status
                    cancelTravelerRequests(traveler.uid, jobId);
                    console.log('decline traveler');
                  }}
                  isSelected
                  btnBackgoundColor="mediumvioletred"
                  btnTextColor="white"
                  btnBorderColor="mediumvioletred"
                />
              </View>
              <View style={styles.buttonContainer}>
                <WideButton
                  buttonText="Cancel"
                  onPressHandler={() => {
                    console.log('cancel modal');
                    setShowModal(false);
                  }}
                  isSelected
                  btnBackgoundColor="white"
                  btnTextColor="mediumvioletred"
                  btnBorderColor="mediumvioletred"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  </View>
);

export default DeclineTravler;
