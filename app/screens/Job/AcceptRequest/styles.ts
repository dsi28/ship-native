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
    // marginTop: 30,
    height: '100%',
    flexDirection: 'column'
  },
  headerContainer: {
    backgroundColor: '#f3f5fa',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 15
  },
  travlerContainer: { marginBottom: 20 },
  locationContainer: { flexDirection: 'row', marginBottom: 25 },
  locationIconContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // TODO https://github.com/oblador/react-native-vector-icons/issues/774
    marginLeft: -5
  },
  locationTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationText: {
    fontSize: 20,
    color: '#87CEEB',
    fontWeight: 'bold'
  },
  jobDetailsContainer: { marginTop: 25 },

  buttonsContainer: {
    // backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  buttonContainer: { marginBottom: 20 }
});
export default styles;
