import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  scrollContainer: {
    marginTop: 15,
    marginHorizontal: 15
    // backgroundColor: 'pink'
  },
  avatarView: {
    width: 110,
    backgroundColor: 'lightgray',
    height: 110,
    borderRadius: 55,
    // borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  travelerImage: { height: '100%', width: '100%', borderRadius: 55 }
});
export default styles;
