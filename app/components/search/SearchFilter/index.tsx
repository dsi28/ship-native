import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

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
    <View style={styles.searchContainer}>
      <Text style={styles.filterName}>{filterName}</Text>
    </View>

    <View>
      <TextInput
        style={styles.inputContainer}
        placeholder={filter === '' ? filterPlaceholder : filter}
        onChangeText={(e) => {
          setFilter(e);
          // update
        }}
        value={filter}
      />
    </View>
  </View>
);

export default SearchFilter;
