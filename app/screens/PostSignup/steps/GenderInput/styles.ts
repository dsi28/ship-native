import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 20,
    marginVertical: 10
  },
  subContainer: {
    flexDirection: 'column',
    height: '100%'
  },
  screenTitleContainer: {
    // marginTop: 20,
    marginBottom: 50
  },
  screenTitle: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: 'black',
    // width: '70%',
    marginRight: 150
  },
  screenInputContainer: {
    borderRadius: 10,
    flexDirection: 'column'
    // borderColor: 'black',
    // borderWidth: 10,
  },
  inputButtonContainer: { marginBottom: 7 },

  //   screenInput: {
  //     fontSize: 20,
  //     marginBottom: 20,
  //     borderBottomWidth: 2,
  //     borderBottomColor: 'black'
  //   },
  screenNextButtonContainer: {
    marginBottom: 20,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  }
});
export default styles;
