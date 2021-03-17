import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../../navigation/NavigationService';

const PayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        buttonStyle={{ height: 50, width: 70, backgroundColor: 'transparent' }}
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
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 17,
              borderTopLeftRadius: 17
            }}
          >
            <View style={{ width: '100%', marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginBottom: 12,
                  textAlign: 'left'
                }}
              >
                Create
              </Text>
            </View>
            <Pressable
              onPress={() => {
                console.log('shipp');
                setModalVisible(false);
                NavigationService.navigate('Home', {
                  screen: 'New Job'
                  // initial: false
                });
              }}
              style={{ width: '100%', marginBottom: 10 }}
            >
              {({ pressed }) => (
                <View
                  style={{
                    // backgroundColor: 'blue',
                    width: '100%',
                    opacity: pressed ? 0.8 : 1,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Feather name="box" color="#e91e63" size={40} />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                      justifyContent: 'center',
                      marginHorizontal: 10
                    }}
                  >
                    <Text
                      style={{
                        opacity: pressed ? 0.8 : 1,
                        fontSize: 20,
                        fontWeight: 'bold'
                        // color: btnTextColor
                      }}
                    >
                      Ship Item
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>

            <Pressable
              onPress={() => console.log('add trip')}
              style={{ width: '100%' }}
            >
              {({ pressed }) => (
                <View
                  style={{
                    // backgroundColor: 'blue',
                    width: '100%',
                    opacity: pressed ? 0.8 : 1,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                    <Ionicons name="airplane" color="#e91e63" size={40} />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      // backgroundColor: 'yellow',
                      justifyContent: 'center',
                      marginHorizontal: 10
                    }}
                  >
                    <Text
                      style={{
                        opacity: pressed ? 0.8 : 1,
                        fontSize: 20,
                        fontWeight: 'bold'
                        // color: btnTextColor
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
