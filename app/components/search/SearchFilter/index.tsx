import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface SearchFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filterName: string;
  filterPlaceholder: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  filter,
  setFilter,
  filterName,
  filterPlaceholder
}) => (
  <View>
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{filterName}</Text>
    </View>

    <View>
      <TextInput
        style={{
          fontSize: 17,
          // marginBottom: 20,
          borderWidth: 2,
          borderColor: 'lightgray',
          width: '50%'
        }}
        placeholder={filter === '' ? filterPlaceholder : filter}
        onChangeText={(e) => {
          console.log('change text form input: ', e);
          setFilter(e);
          // update
        }}
        value={filter}
      />
    </View>
  </View>
);

export default SearchFilter;
