import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f5fa'
  },
  subContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: 'column',
    height: '100%'
    // backgroundColor: 'pink'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#87CEEB'
  },
  headerView: { marginTop: 15 },
  createAccountView: { alignItems: 'flex-end' },
  contentView: { marginTop: 50 },
  forgotContainer: { alignItems: 'center' },
  loginBtn: {
    marginBottom: 20,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  }
});
export default styles;
