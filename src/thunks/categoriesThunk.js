import { categoriesError, categoriesLoading, categoriesReceived } from "../redux/categoriesSlice";

export const fetchCategories = () => (dispatch) => {

  dispatch(categoriesLoading());

  fetch(process.env.REACT_APP_URL + '/api/categories')
    .then(request => {
      if (request.status === 200) {
        return request.json();
      } else {
        dispatch(categoriesError('Произошла ошибка' + request.statusText));
        return;
      }
    })
    .then(json => {
      console.log(json)
      dispatch(categoriesReceived(json))
    })
    .catch((err) => dispatch(categoriesError(`Произошла ошибка: ${err}`)));
}