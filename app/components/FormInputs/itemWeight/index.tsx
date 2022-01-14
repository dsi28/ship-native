import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface ItemWeightProps {
  weight: number;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
}

const ItemWeight: React.FC<ItemWeightProps> = ({ weight, setWeight }) => {
  const tempWeight: string = weight.toString();

  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          backgroundColor: 'lightgray',
          // justifyContent: 'space-evenly',
          paddingHorizontal: 20,
          // alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#f3f5fa'
        }}
      >
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
            ITEM WEIGHT
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 15,
            flexDirection: 'row'
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'gray'
              }}
            >
              Max weight 500 lb.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#f3f5fa',
          justifyContent: 'space-evenly',
          marginBottom: 20,
          paddingRight: 20,
          height: 80,
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#f3f5fa'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100%'
            }}
            maxLength={4}
            value={tempWeight}
            keyboardType="numeric"
            onChangeText={(newDim) => {
              setWeight(parseInt(newDim.replace(/[^0-9]/g, ''), 10));
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 25, color: 'gray' }}>lb</Text>
        </View>
      </View>
    </View>
  );
};
export default ItemWeight;
