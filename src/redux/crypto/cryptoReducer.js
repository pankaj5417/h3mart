import {
  GET_CRYPTO_ERROR,
  GET_CRYPTO_LOADING,
  GET_CRYPTO_SUCCESS,
} from "./cryptoActionType";

const initialState = {
  isLoading: false,
  isError: false,
  cryptoData: [],
};
export const cryptoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CRYPTO_LOADING:
      return { ...state, isLoading: true, isError: false, cryptoData: [] };

    case GET_CRYPTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cryptoData: payload,
      };

    case GET_CRYPTO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        cryptoData: [],
      };
    default:
      return {
        state,
      };
  }
};
