import {
  GET_CRYPTO_ERROR,
  GET_CRYPTO_LOADING,
  GET_CRYPTO_SUCCESS,
} from "./cryptoActionType";

export const getCryptoLoading = () => {
  return {
    type: GET_CRYPTO_LOADING,
  };
};

export const getCryptoSuccess = (data) => {
  return {
    type: GET_CRYPTO_SUCCESS,
    payload: data,
  };
};
export const getCryptoError = (err) => {
  return {
    type: GET_CRYPTO_ERROR,
    payload: err,
  };
};

export const getCryptoData = () => async (dispatch) => {
  try {
    dispatch(getCryptoLoading());
    const res = await fetch(`https://api.coincap.io/v2/assets`);
    const cryptodata = await res.json();
    console.log("Cryptos", cryptodata.data);
    dispatch(getCryptoSuccess(cryptodata.data));
  } catch (err) {
    dispatch(getCryptoError(err));
  }
};
