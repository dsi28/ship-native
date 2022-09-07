import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  subContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    height: '100%'
  },
  subContainerContent: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#87CEEB'
  },
  createAccountView: { alignItems: 'flex-end' },

  headerView: { marginTop: 15 },
  loginBtn: {
    marginBottom: 20,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  },
  subHeaderContainer: { marginTop: 50 },
  subHeaderText: { fontSize: 20, color: '#87CEEB', lineHeight: 30 },
  contentContainer: { marginTop: 50, marginBottom: 50 }
});
export default styles;
