import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
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
  travelerImage: { height: '100%', width: '100%', borderRadius: 55 },
  titleContainer: { marginTop: 15 },
  titleText: { fontSize: 25, fontWeight: 'bold' },
  reviewContainer: { flexDirection: 'row', marginTop: 10 },
  reviewIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  reviewTextContainer: { alignItems: 'center', justifyContent: 'center' },
  reviewText: { fontSize: 20, color: 'gray' }
});
export default styles;
