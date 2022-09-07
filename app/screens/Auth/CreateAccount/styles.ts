import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87CEEB',
    width: '100%',
    height: '100%'
  },
  welcomeText: { color: 'white', fontSize: 20, opacity: 0.5 },
  shipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  shipText: { color: 'white', fontWeight: 'bold', fontSize: 40 },
  shipLetterText: { color: 'orange', fontWeight: 'bold', fontSize: 40 },
  contentContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 15,
    marginTop: 10
  },
  navLinkContainer: { alignItems: 'flex-end' },
  welcomeContainer: { alignItems: 'center', marginTop: 70 },
  iconStyle: { marginHorizontal: 20, height: 50 },
  orContainer: { alignItems: 'center', marginVertical: 20 },
  orText: { color: 'gray' },
  pressableContainer: { marginBottom: 20 },
  subTextContainer: { marginHorizontal: 20, flexDirection: 'row' },
  subText: { color: 'gray', textAlign: 'center', fontSize: 15 },
  pressableNext: {
    backgroundColor: '#87CEEB',
    height: 50,
    // width: '100%', // substract sum of marginHorizontal(10+10)
    borderRadius: 30,
    // borderColor: 'orange',
    // borderWidth: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    // position: 'absolute', //If button is not sticking to the bottom of screen this has to be enabled or passed for when neede on bottom
    // top: 20
    // zIndex: 100,
    // elevation: 101 // only for android?
  }
});
export default styles;
