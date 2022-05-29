import { productsError, productsLoading, productsReceived } from "../redux/productsSlice";

export const fetchServices = () => (dispatch) => {

  dispatch(productsLoading());

  fetch(PATH)
    .then(request => {
      if (request.status === 200) {
        return request.json();
      } else {
        dispatch(productsError('Произошла ошибка'));
        return;
      }
    })
    .then(json => {
      dispatch(productsReceived(json))
    })
    .catch((err) => dispatch(productsError(`Произошла ошибка: ${err}`)));
}

export const fetchServiceById = (id) => (dispatch) => {
  dispatch(productsLoading());

  fetch(PATH + id)
    .then(request => {
      if (request.status === 200) {
        return request.json();
      } else {
        dispatch(productsError('Произошла ошибка'));
        return;
      }
    })
    .then(json => {
      dispatch(productsReceived(json))
    })
    .catch((err) => dispatch(productsError(`Произошла ошибка: ${err}`)));
}

export const deleteServices = (id) => (dispatch) => {
  dispatch(productsLoading());
  fetch(PATH + id, {
    method: "DELETE"
  })
    .then(() => dispatch(fetchServices()))
    .catch((err) => dispatch(productsError(`Произошла ошибка: ${err}`)));
}

export const updateServices = (obj) => (dispatch) => {
  dispatch(productsLoading());
  fetch(PATH, {
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((res) => {
      console.log(res);
      res.ok ? dispatch(productsRedirect(true)) : dispatch(productsRedirect(false));
    })
    .then(() => dispatch(fetchServices()))
    .catch((err) => {
      dispatch(productsError(`Произошла ошибка: ${err}`));
      dispatch(productsRedirect(false));
    });
}
