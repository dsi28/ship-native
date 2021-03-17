import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingHorizontal: 20,
    marginVertical: 10
    // backgroundColor: 'green'
  },
  subContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'

    // paddingHorizontal: 20

    // backgroundColor: 'pink'
  },
  screenTitleContainer: {
    // marginTop: 20,
    marginBottom: 50
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    // width: '70%',
    marginRight: 150
  },
  screenInputContainer: {
    borderRadius: 10
    // zIndex: 10
    // borderColor: 'black',
    // borderWidth: 10,
  },
  screenInput: {
    fontSize: 20,
    // marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray'
  },
  screenNextButtonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20

    // bottom: 0,
    // right: 0,
    // left: 0,
    // position: 'absolute'
  }
});
export default styles;
