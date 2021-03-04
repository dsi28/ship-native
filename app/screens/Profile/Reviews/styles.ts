import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { height: '100%' },
  scrollViewContainer: { marginHorizontal: 20, marginTop: 40 },
  row: {
    flexDirection: 'row',
    marginBottom: 30
  },
  flex1: { flex: 1 },
  reviewRow: {
    flexDirection: 'row',
    marginBottom: 40
  },
  iconView: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  aboutSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  reviewTitleView: { alignItems: 'center', justifyContent: 'center' },
  flexDirectionCol: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  reviewHeaderView: { flexDirection: 'row', marginBottom: 5 },
  reviewImageContainer: {
    width: 50,
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 25,
    // borderWidth: 5,
    // borderColor: 'lightgray',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  reviewImage: { height: '100%', width: '100%', borderRadius: 25 },
  reviewerDetails: {
    flexDirection: 'column',
    marginHorizontal: 10
    // justifyContent: 'center'
  },
  reviewerName: { fontSize: 17, fontWeight: 'bold' },
  reviewDate: {
    fontSize: 15,
    color: '#474747',
    fontWeight: 'bold'
  }
});
export default styles;
