import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    // marginHorizontal: 15,
    // backgroundColor: 'pink',
    width: Dimensions.get('screen').width
    // height: Dimensions.get('screen').height
  },
  scrollContainer: {
    // backgroundColor: 'blue',
    marginTop: 30,
    height: '100%',
    flexDirection: 'column'
  },
  imageRowView: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: 'red',
  },
  screenInputContainer: {
    borderRadius: 10,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
    width: '100%',
    height: '80%'
    // borderColor: 'black',
    // borderWidth: 10,
  },
  imageView: {
    flex: 1,
    marginHorizontal: 30
  },
  imageContainer: { width: '100%' },
  imageSubContainer: {
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
  }
});
export default styles;
