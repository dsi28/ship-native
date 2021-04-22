import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    // marginHorizontal: 15,
    // backgroundColor: 'pink',
    width: Dimensions.get('screen').width
    // height: Dimensions.get('screen').height
  },
  scrollContainer: {
    // backgroundColor: 'blue',
    // marginTop: 30,
    height: '100%',
    flexDirection: 'column'
  },
  headerContainer: {
    backgroundColor: '#f3f5fa',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 15
  },
  headerSubContainer: { flexDirection: 'row', marginBottom: 5 },
  imageContainer: { flexDirection: 'row', marginBottom: 5 },
  image: { height: '100%', width: '100%', borderRadius: 40 },
  contentContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    // alignItems: 'center'
    justifyContent: 'flex-end'
  },
  nameContainer: { marginBottom: 5 },
  nameText: { fontSize: 23, fontWeight: 'bold' },
  contentSubContainer: {
    flexDirection: 'row',
    marginBottom: 40
  },
  pressableContainer: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressableSimpleContainer: { alignItems: 'center', justifyContent: 'center' },
  pressableText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  locationContainer: { flexDirection: 'row', marginBottom: 25 },
  locationIconContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // TODO https://github.com/oblador/react-native-vector-icons/issues/774
    marginLeft: -5
  },
  locationTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationText: {
    fontSize: 20,
    color: 'mediumvioletred',
    fontWeight: 'bold'
  },
  jobDetailsContainer: { marginTop: 25 },

  buttonsContainer: {
    // backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  buttonContainer: { marginBottom: 20 }
});
export default styles;
