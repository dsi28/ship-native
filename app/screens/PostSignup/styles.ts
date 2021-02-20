import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  pressableNext: {
    backgroundColor: 'white',
    height: 60,
    width: '100%', // substract sum of marginHorizontal(10+10)
    borderRadius: 30,
    // marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
    elevation: 101 // only for android?
  },
  pressableNextTxt: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default styles;
