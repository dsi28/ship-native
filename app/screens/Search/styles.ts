import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15
    // backgroundColor: 'pink'
  },

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
  avatarView: {
    width: 90,
    backgroundColor: 'lightgray',
    height: 90,
    // borderRadius: 30,
    // borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  avatarLetter: { fontSize: 30 },
  iconView: {
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPresable: {
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: 'black',
    borderWidth: 3
  },
  buttonDeclineText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  rightButtonView: { flex: 1, marginLeft: 5 },
  leftButtonView: { flex: 1, marginRight: 5 },
  buttonAcceptText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  cardDetailsView: {
    flexDirection: 'column',
    marginLeft: 5,
    // flex: 2,
    justifyContent: 'space-between',
    flex: 1
  },

  // reusable styles:
  flexDirectionRow: { flexDirection: 'row' },
  fontSize17: { fontSize: 17 },
  fontSize30: { fontSize: 30 },
  fontSize25: { fontSize: 25 },
  fontSize15: { fontSize: 15 }
});
export default styles;
