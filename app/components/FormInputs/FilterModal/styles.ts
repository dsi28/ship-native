import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'green' // '#f3f5fa',
    // shadowOpacity: 0.8
    // opacity: 0.5
  },
  modalView: {
    width: '100%',
    height: '100%',
    margin: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  filterContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  titleText: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold'
  },
  locationFilterContainer: {
    width: '100%',
    marginBottom: 35
  }
});
export default styles;
