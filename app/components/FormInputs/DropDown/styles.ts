import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  labelContainer: { marginBottom: 10 },
  labelText: { fontSize: 20, color: 'gray' },
  dropDownItemContainer: { marginBottom: 30 },
  dropDownContainer: { height: 40 },
  dropDownStyles: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderBottomColor: 'lightgray',
    borderWidth: 0,
    borderBottomWidth: 2
  },
  dropDownItemStyle: {
    justifyContent: 'flex-start'
  },
  dropDownLabelStyle: {
    fontSize: 20,
    textAlign: 'left',
    color: '#000'
    // backgroundColor: 'green'
  },
  dropDownDropDownStyle: { backgroundColor: 'white' }
});
export default styles;
