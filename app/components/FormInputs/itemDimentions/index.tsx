import React from 'react';
import { Text, TextInput, View } from 'react-native';
import FontA5 from 'react-native-vector-icons/FontAwesome5';

interface ItemDimsProps {
  length: number;
  width: number;
  height: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

const ItemDims: React.FC<ItemDimsProps> = ({ length, width, height }) => {
  const tempLength: string = length.toString();
  const tempWidth: string = width.toString();
  const tempHeight: string = height.toString();
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
            ITEM DIMENSIONS
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
              L
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginHorizontal: 5
            }}
          >
            <FontA5 name="times" size={10} color="gray" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'gray'
              }}
            >
              W
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginHorizontal: 5
            }}
          >
            <FontA5 name="times" size={10} color="gray" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'gray'
              }}
            >
              H
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
            style={{ fontSize: 20, fontWeight: 'bold' }}
            maxLength={4}
            value={tempLength}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            justifyContent: 'center'
          }}
        >
          <FontA5 name="times" size={30} color="gray" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{ fontSize: 20, fontWeight: 'bold' }}
            maxLength={4}
            value={tempWidth}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            justifyContent: 'center'
          }}
        >
          <FontA5 name="times" size={30} color="gray" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{ fontSize: 20, fontWeight: 'bold' }}
            maxLength={4}
            value={tempHeight}
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 25, color: 'gray' }}>in</Text>
        </View>
      </View>
    </View>
  );
};
export default ItemDims;
