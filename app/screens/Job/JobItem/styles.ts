import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    // marginHorizontal: 15,
    backgroundColor: 'pink',
    width: Dimensions.get('screen').width
    // height: Dimensions.get('screen').height
  },
  scrollContainer: {
    backgroundColor: 'blue',
    marginHorizontal: 15,
    marginTop: 30,
    height: '100%'
  }
});
export default styles;
