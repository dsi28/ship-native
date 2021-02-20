import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContatiner: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30
  },
  flex3: { flex: 3 },
  marginBottom10: { marginBottom: 10 },
  marginBottom40: { marginBottom: 40 },
  reviewRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  iconView: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addSectionContainer: {
    marginTop: 40,
    paddingBottom: 40
  },
  aboutIconText: {
    fontSize: 20
    // alignSelf: 'flex-end'
  },
  aboutSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  marginTop30: { marginTop: 30 }
});
export default styles;
