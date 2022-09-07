import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 20,
    marginVertical: 10
  },
  subContainer: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  screenTitleContainer: {
    // marginTop: 20,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 40,
    // fontWeight: 'bold',
    color: '#87CEEB',
    // width: '70%',
    marginRight: 10
  },
  ruleText: {
    color: '#FFC100',
    fontSize: 20
  },
  secondInputContainer: { marginTop: 30 },
  screenInputContainer: {
    borderRadius: 10
    // borderColor: 'black',
    // borderWidth: 10,
  },
  screenInput: {
    fontSize: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  screenNextButtonContainer: {
    marginBottom: 20
    // bottom: 0,
    // right: 0,
    // left: 0,
    // position: 'relative'
  }
});
export default styles;
