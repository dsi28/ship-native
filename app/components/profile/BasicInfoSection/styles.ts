import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContatiner: {
    // borderBottomWidth: 1,
    // borderColor: 'lightgray',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  flex3: { flex: 3 },
  nameContainer: { marginBottom: 5 },
  nameTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40
  },
  joinedTitle: {
    color: '#87CEEB',
    fontSize: 20
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 60
    // borderWidth: 5
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 20
  },
  avatarView: {
    width: 120,
    // backgroundColor: 'lightgray',
    height: 120,
    borderRadius: 60,
    // borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
  },
  reviewRow: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  iconView: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewVerfiedText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default styles;
