import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    // marginHorizontal: 15,
    // backgroundColor: 'pink',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,

    backgroundColor: 'transparent'
  },
  scrollContainer: {
    // backgroundColor: 'blue',
    marginTop: 30,
    height: '100%',
    flexDirection: 'column'
  },

  buttonsContainer: {
    // backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  buttonContainer: { marginBottom: 20 }
});
export default styles;
