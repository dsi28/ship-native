import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    height: Dimensions.get('window').height,
    marginHorizontal: 20,
    marginVertical: 10
  },
  subContainer: {
    flexDirection: 'column',
    // height: '100%'
    height: Dimensions.get('window').height
  },
  imageContentContainer: {
    height: '80%'
    // backgroundColor: 'blue'
  },
  screenTitleContainer: {
    // marginTop: 20,
    marginBottom: 25
  },
  screenTitle: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: '#87CEEB',
    // width: '70%',
    marginRight: 100
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
  screenNextButtonContainer: {
    height: '20%',
    marginBottom: 20,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  },
  imageRowView: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: 'red',
  },
  imageView: {
    flex: 1,
    marginHorizontal: 30
  }
});
export default styles;
