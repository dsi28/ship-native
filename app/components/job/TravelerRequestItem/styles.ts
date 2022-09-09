import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /// item component styles

  cardItemContainer: {
    padding: 15,
    margin: 5,
    flexDirection: 'column',
    // borderColor: 'black',
    // borderWidth: 2,
    borderRadius: 10,
    // elevation: 5
    backgroundColor: 'white'
  },
  subContainer: { flexDirection: 'row', width: '100%' },
  avatarView: {
    width: 90,
    backgroundColor: 'lightgray',
    height: 90,
    borderRadius: 45,
    // borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  travelerImage: { height: '100%', width: '100%', borderRadius: 45 },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5
  },

  avatarLetter: { fontSize: 30 },
  iconView: {
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsContainer: { flex: 1, flexDirection: 'row' },
  nameText: {
    fontWeight: 'bold',
    color: '#87CEEB',
    fontSize: 20
  },
  nameContainer: { marginBottom: 5 },
  detailContainer: { flexDirection: 'row', marginTop: 10 },
  cardDetailsView: {
    flexDirection: 'column',
    marginLeft: 5,
    // flex: 2,
    justifyContent: 'space-between',
    flex: 1
  },
  detailTitle: { fontSize: 15, color: 'gray' },
  detailValueContainer: { marginLeft: 5 },
  detailValueText: { fontSize: 15, color: 'black' },

  // reusable styles:
  marginRight30: { marginRight: 30 },
  flexDirectionColumn: { flexDirection: 'column' },
  flexDirectionRow: { flexDirection: 'row' },
  fontSize17: { fontSize: 17 },
  fontSize30: { fontSize: 30 },
  fontSize25: { fontSize: 25 },
  fontSize15: { fontSize: 15 }
});
export default styles;
