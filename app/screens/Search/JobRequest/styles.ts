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
  }
});
export default styles;
