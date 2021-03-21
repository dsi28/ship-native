import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: Colors.grey800,
    // borderRadius: 5,
    height: 50,
    marginBottom: 30
    // alignSelf: 'center'
  },
  countText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    color: 'black'
  },
  count: {
    marginHorizontal: 20,
    minWidth: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5
  },
  touchable: {
    minWidth: 35,
    width: 50,
    minHeight: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'lightgray'
  },
  buttonText: {
    fontSize: 30,
    color: 'black'
  }
});
export default styles;
