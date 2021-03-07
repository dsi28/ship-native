import React from 'react';
import { Modal, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerHeaderComponent from '../../../components/Traveler/Header';

interface DeclineTravlerProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeclineTravler: React.FC<DeclineTravlerProps> = ({
  showModal,
  setShowModal
}) => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={() => {
          console.log('close');
        }}
        style={{ backgroundColor: 'green' }}
        // presentationStyle="fullScreen"
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <View
            style={{
              paddingTop: 20,
              // margin: 20,
              borderRadius: 20,
              // padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              backgroundColor: 'white',
              width: '90%',
              height: '80%'
            }}
          >
            <ScrollView style={{ width: '100%' }}>
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 25
                  }}
                >
                  Decline Request
                </Text>
              </View>
              <View style={{ marginBottom: 25 }}>
                <TravelerHeaderComponent />
              </View>
              <View
                style={{
                  paddingTop: 20,
                  paddingHorizontal: 25,
                  marginBottom: 25,
                  backgroundColor: '#f3f5fa',
                  width: '100%'
                }}
              >
                <JobPropertyComponent
                  title="Flying on"
                  value="January 12, 2021"
                />
                <JobPropertyComponent title="Flying to" value="Florida, USA" />
              </View>
              <View style={{ marginBottom: 25, marginHorizontal: 20 }}>
                <View style={{ marginBottom: 20, marginTop: 10 }}>
                  <WideButton
                    buttonText="Decline"
                    onPressHandler={() => {
                      setShowModal(false);
                      console.log('decline traveler');
                    }}
                    isSelected
                    btnBackgoundColor="orange"
                    btnTextColor="white"
                    btnBorderColor="orange"
                  />
                </View>
                <View style={{ marginBottom: 20 }}>
                  <WideButton
                    buttonText="Cancel"
                    onPressHandler={() => {
                      console.log('cancel modal');
                      setShowModal(false);
                    }}
                    isSelected
                    btnBackgoundColor="bisque"
                    btnTextColor="orange"
                    btnBorderColor="orange"
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DeclineTravler;
