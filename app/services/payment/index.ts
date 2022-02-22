/* eslint-disable import/prefer-default-export */

const API_URL = 'http://localhost:3000';

export const paymentSheetAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer
    };
  } catch (error) {
    console.log(error);
    return {
      paymentIntent: '',
      ephemeralKey: '',
      customer: ''
    };
  }
};
