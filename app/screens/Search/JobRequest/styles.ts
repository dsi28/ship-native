import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: { backgroundColor: '#f3f5fa' },
  container: {
    paddingTop: 10,
    // backgroundColor: 'pink',
    paddingBottom: 10
    // marginHorizontal: 15
    // backgroundColor: 'pink'
  },
  titleContainer: {
    marginHorizontal: 15,
    marginBottom: 35
  },
  titleText: { fontWeight: 'bold', fontSize: 30 },
  deliveryContainer: { paddingHorizontal: 15, backgroundColor: '#f3f5fa' },
  paymentContainer: {
    backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 25
  },
  paymentTitleText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  paymentValueText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  receiveContainer: { marginHorizontal: 15 },
  receiveTitleContainer: { marginBottom: 10 },
  receiveTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  receiveTogglerContainer: { alignItems: 'center' },
  buttonsContainer: { marginHorizontal: 15, marginTop: 20, marginBottom: 15 },
  buttonContainer: { marginBottom: 15 }
});
export default styles;
