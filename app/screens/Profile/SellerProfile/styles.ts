import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    height: Dimensions.get('window').height
  },
  container: {
    paddingTop: 30,
    backgroundColor: '#f3f5fa',
    height: '100%'
  },
  basicInfoContainer: { marginHorizontal: 15 },
  itemContainer: {
    flexDirection: 'column',
    width: Dimensions.get('window').width
  }
});
export default styles;
