import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: { backgroundColor: 'green' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  modalSubContainer: {
    paddingTop: 20,
    // margin: 20,
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    width: '90%',
    height: '80%'
  },
  modalScroll: { width: '100%' },
  titleContainer: { marginBottom: 20 },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  headerContainer: { marginBottom: 25 },
  loctionsContainer: {
    paddingTop: 20,
    paddingHorizontal: 25,
    marginBottom: 25,
    backgroundColor: '#f3f5fa',
    width: '100%'
  },
  optionsContainer: { marginBottom: 25, marginHorizontal: 20 },
  topButtonContainer: { marginBottom: 20, marginTop: 10 },
  buttonContainer: { marginBottom: 20 }
});
export default styles;
