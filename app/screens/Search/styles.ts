import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    // backgroundColor: '#f3f5fa'
    backgroundColor: 'green'
  },
  container: {
    marginTop: 10,
    marginHorizontal: 15
    // backgroundColor: 'pink'
  },
  iconView: {
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  filterTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: 'black'
  },
  filterIconsContainer: { flexDirection: 'row', alignItems: 'center' }
});
export default styles;
