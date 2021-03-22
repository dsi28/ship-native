import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  checkBoxContainer: {
    // backgroundColor: 'red',
    justifyContent: 'flex-start'
  },
  textContainer: {
    marginLeft: 20,
    justifyContent: 'center'
  },
  headerContainer: {
    justifyContent: 'center',
    marginTop: 2
  },
  headerText: { fontSize: 18, fontWeight: 'bold' },
  subHeaderContainer: { marginTop: 10 },
  subHeaderText: { fontSize: 18, color: 'gray' }
});
export default styles;
