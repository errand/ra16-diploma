import {productsError, productsLoading, productsReceived, setSearchQuery, setOffset} from "../redux/productsSlice";

export const fetchProducts = (path) => (dispatch) => {
  dispatch(productsLoading());

  fetch(process.env.REACT_APP_URL + path)
    .then(request => {
      if (request.status === 200) {
        return request.json();
      } else {
        dispatch(productsError('Произошла ошибка' + request.statusMessage));
        return;
      }
    })
    .then(json => {
      dispatch(productsReceived(json))
    })
    .catch((err) => dispatch(productsError(`Произошла ошибка: ${err}`)));
}

export const setStateQuery = (str) => (dispatch) => {
  dispatch(setSearchQuery(str))
}

export const setStateOffset = (num) => (dispatch) => {
  dispatch(setOffset(num))
}
