import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  paymentAlignment: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default styles;
