import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { height: '100%' },
  sectionContatiner: {
    // borderBottomWidth: 1,
    // borderColor: 'lightgray',
    // paddingBottom: 10,
    // marginTop: 30,
    marginHorizontal: 15,
    height: '100%',
    // width: '100%',
    flexDirection: 'column'
  },
  scrollViewContainer: { marginHorizontal: 20, marginTop: 40 },
  row: {
    flexDirection: 'row',
    marginBottom: 30
  },
  flex3: { flex: 3 },
  flex1: { flex: 1 },
  marginBottom10: { marginBottom: 10 },

  reviewRow: {
    flexDirection: 'row',
    marginBottom: 40
  },
  iconView: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  marginBottom40: { marginBottom: 40 },
  aboutSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  aboutIconText: {
    fontSize: 20
    // alignSelf: 'flex-end'
  },
  avatarLetter: { fontSize: 30 },
  reviewTitleView: { alignItems: 'center', justifyContent: 'center' },
  flexDirectionCol: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  reviewHeaderView: { flexDirection: 'row', marginBottom: 15 },
  reviewAvatar: {
    width: 50,
    // backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewerDetails: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  reviewerName: { fontSize: 17, fontWeight: 'bold' },
  reviewDate: {
    fontSize: 15,
    color: '#474747',
    fontWeight: 'bold'
  },
  marginTop20: { marginTop: 20 }
});
export default styles;
