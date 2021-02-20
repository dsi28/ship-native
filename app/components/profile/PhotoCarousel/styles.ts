import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  dotView: { flexDirection: 'row', justifyContent: 'center' },

  /// item
  cardView: {
    flex: 1,
    width: width - 50, // 30(marginHorizontal=15 from sellerprofile file) + 20(marginhorizontal= 10 from this file)
    height: height / 3,
    backgroundColor: 'orange',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20
  },

  image: {
    width: width - 50,
    height: height / 3,
    borderRadius: 10
  }

  // item
});
export default styles;
