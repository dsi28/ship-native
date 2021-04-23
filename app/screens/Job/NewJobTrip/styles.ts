import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addButton: { height: 50, width: 70, backgroundColor: 'transparent' },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17
  },
  titleContainer: { width: '100%', marginBottom: 20 },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left'
  },
  pressable: { width: '100%', marginBottom: 10 },
  pressableSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  pressableBottom: { width: '100%' }
});
export default styles;
