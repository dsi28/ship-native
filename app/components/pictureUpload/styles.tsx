import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { width: '100%' },
  imageContainer: {
    width: '100%',
    backgroundColor: 'lightgray',
    height: '100%',
    borderRadius: 1,
    borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black'
  },
  imagePhoto: {
    flex: 2,
    height: undefined,
    width: undefined
  },
  iconToggle: {
    // backgroundColor: 'white',
    position: 'absolute',
    right: -15,
    bottom: -15,
    margin: 0,
    padding: 0,
    borderWidth: 0
  },
  screenInputContainer: {
    borderRadius: 10
    // borderColor: 'black',
    // borderWidth: 10,
  },
  screenInput: {
    fontSize: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  screenNextButtonContainer: {
    marginBottom: 20,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  }
});
export default styles;
