import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardItemContainer: {
    padding: 15,
    margin: 10,
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10
  },
  statusText: { fontSize: 17, color: 'gray' },
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
    width: 60,
    backgroundColor: 'lightgray',
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
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
    color: 'red',
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
    flex: 2
    // backgroundColor: 'red'
  },

  // reusable styles:
  flexDirectionRow: { flexDirection: 'row' },
  flexDirectionCol: { flexDirection: 'column' },
  fontSize17: { fontSize: 17 },
  fontSize30: { fontSize: 30 },
  fontSize25: { fontSize: 25 }
});
export default styles;
