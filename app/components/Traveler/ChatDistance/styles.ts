import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#f3f5fa',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cdContainer: { flexDirection: 'row' },
  cdIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  cdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cdText: {
    fontSize: 20,
    color: 'mediumvioletred',
    fontWeight: 'bold'
  }
});
export default styles;
