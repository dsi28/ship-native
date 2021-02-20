import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressableNext: {
    backgroundColor: 'black',
    height: 60,
    width: '100%', // substract sum of marginHorizontal(10+10)
    borderRadius: 30,
    // marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    // position: 'absolute', //If button is not sticking to the bottom of screen this has to be enabled or passed for when neede on bottom
    // top: 20
    // zIndex: 100,
    // elevation: 101 // only for android?
  },
  pressableNextTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
export default styles;
