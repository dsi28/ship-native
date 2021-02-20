import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContatiner: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30
  },
  flex3: { flex: 3 },
  marginBottom10: { marginBottom: 10 },
  nameTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30
  },
  joinedTitle: {
    color: 'gray',
    fontSize: 15
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarView: {
    width: 60,
    // backgroundColor: 'lightgray',
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewRow: {
    flexDirection: 'row',
    marginBottom: 20
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
