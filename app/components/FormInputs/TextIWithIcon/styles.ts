import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  labelIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelText: { fontSize: 20, color: 'gray' },
  inputTextContainer: { marginBottom: 30, color: 'black' },
  inputText: {
    color: 'black',
    fontSize: 20,
    // marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray'
  }
});
export default styles;
