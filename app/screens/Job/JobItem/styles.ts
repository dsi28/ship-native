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
  itemDetailsContainer: { marginHorizontal: 15 },
  detailsHeader: { fontWeight: 'bold', fontSize: 30, marginBottom: 30 },
  receiverContainer: {
    backgroundColor: '#f3f5fa',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 15
  },
  receiverHeaderContainer: { marginBottom: 30 },
  receiverHeader: { fontSize: 25, fontWeight: 'bold' },
  paymentContainer: {
    backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  paymentText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  paymentAmount: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
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
