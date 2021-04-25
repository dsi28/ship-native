import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#f3f5fa',
    height: Dimensions.get('window').height
    // marginHorizontal: 15
  },
  basicInfoContainer: { marginHorizontal: 15 },
  itemContainer: {
    flexDirection: 'column',
    width: Dimensions.get('window').width
  }
});
export default styles;
