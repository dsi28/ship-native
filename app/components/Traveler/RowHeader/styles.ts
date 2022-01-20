import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  avatarView: {
    width: 110,
    backgroundColor: 'lightgray',
    height: 110,
    borderRadius: 55,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  detailsContainer: { width: '100%', flex: 1 },
  travelerImage: { height: '100%', width: '100%', borderRadius: 55 },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: { fontSize: 25, fontWeight: 'bold' },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  reviewIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  reviewTextContainer: { alignItems: 'center', justifyContent: 'center' },
  reviewText: { fontSize: 20, color: 'gray' }
});
export default styles;
