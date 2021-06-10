import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginVertical: 10
  },
  subContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  itemInfoContainer: { paddingHorizontal: 20 },
  screenTitleContainer: {
    // marginTop: 20,
    marginBottom: 50
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    // width: '70%',
    marginRight: 150
  },
  subTitleContainer: {
    // marginTop: 20,
    marginBottom: 40
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.8,
    // width: '70%',
    marginRight: 150
  },
  screenInputContainer: {
    borderRadius: 10
  },
  inputContainer: { marginBottom: 10 },
  inputSubTextContainer: { marginBottom: 50 },
  inputSubText: { fontSize: 20, color: 'gray' },
  addItemContainer: {
    marginBottom: 50,
    backgroundColor: '#f3f5fa',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  AddItemTitleContainer: { marginBottom: 30 },
  imageInputContainer: {
    marginHorizontal: 20,
    height: 100,
    width: 100
  },
  buttonsContainer: {
    marginBottom: 20,
    paddingHorizontal: 20

    // bottom: 0,
    // right: 0,
    // left: 0,
    // position: 'absolute'
  },
  noteLabelContainer: { marginBottom: 10 },
  noteLabelText: { fontSize: 20, color: 'gray' },
  noteInputText: {
    borderColor: 'gray',
    borderWidth: 2,
    textAlignVertical: 'top',
    fontSize: 20,
    color: 'gray'
  },
  buttonContainer: { marginBottom: 20 }
});
export default styles;
