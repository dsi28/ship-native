import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollViewContainer: { backgroundColor: '#f3f5fa' },
  container: {
    paddingTop: 10,
    // backgroundColor: 'pink',
    paddingBottom: 10
    // marginHorizontal: 15
    // backgroundColor: 'pink'
  },
  titleContainer: { marginHorizontal: 15, marginBottom: 20 },
  titleText: { fontWeight: 'bold', fontSize: 30 },
  cardView: {
    // flex: 1,
    width, // 30(marginHorizontal=15 from sellerprofile file) + 20(marginhorizontal= 10 from this file)
    height: height / 3,
    backgroundColor: 'orange',
    // marginHorizontal: 10,
    // borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    // shadowRadius: 3,
    elevation: 5,
    marginBottom: 20
  },
  image: {
    width,
    height: height / 3,
    borderRadius: 10
  },
  detailsContainer: { marginHorizontal: 15 },
  distanceContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  distancePinContainer: { flexDirection: 'row' },
  distancePinIconContainer: {
    // marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0
  },
  distancePinText: { fontSize: 20 },
  distanceMapLinkText: { fontSize: 20, color: '#e91e63' },
  paymentContainer: {
    backgroundColor: '#87CEEB',
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 25
  },
  paymentTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  paymentValue: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  detailsIconsContainer: { marginHorizontal: 15, marginBottom: 25 },
  detailsIconContainer: { flexDirection: 'row', marginBottom: 10 },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  iconText: { fontSize: 20, fontWeight: 'bold' },
  ownerContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#f3f5fa',
    paddingVertical: 15
  },
  ownerHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitleContainer: { marginBottom: 15 },
  headerTitleText: { fontSize: 20, fontWeight: 'bold' },
  headerChatContainer: { flexDirection: 'row' },
  headerChatIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  headerChatTextContainer: { alignItems: 'center', justifyContent: 'center' },
  headerChatText: { fontSize: 20, color: '#e91e63' },
  oSenderInfoContainer: { flexDirection: 'row', marginBottom: 5 },
  oSenderInfoImageContainer: {
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
  oSenderInfoImage: { height: '100%', width: '100%', borderRadius: 25 },
  oSenderInfoDetailsContainer: {
    flexDirection: 'column',
    marginHorizontal: 10
    // justifyContent: 'center'
  },
  oSenderInfoDetailsText: { fontSize: 17, fontWeight: 'bold' },
  oSenderInfoReviewContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  oSenderInfoReviewIcon: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  oSenderInfoReviewTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  oSenderInfoReviewText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  oSenderInfoNoteTitle: { fontWeight: 'bold', fontSize: 15, color: 'gray' },
  oSenderInfoNote: { fontSize: 15, color: 'gray' },
  oSenderInfoButtonsContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 15
  },
  paymentCompContainer: { marginBottom: 25 }
});
export default styles;
