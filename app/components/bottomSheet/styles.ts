import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerSubContainer: {
    alignItems: 'center'
  },
  headerContent: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 450
  },
  contentButtonContainer: {
    marginBottom: 20
  }
});
export default styles;
