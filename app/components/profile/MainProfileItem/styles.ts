import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white',
    // opacity: 0.5,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default styles;
