import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import { fetchCategories } from '../../thunks/categoriesThunk'
import { useEffect } from "react";

export default function CategoriesFilter() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.data)
  const loading = useSelector(state => state.categories.loading)
  const error = useSelector(state => state.categories.error)

  useEffect(() => {
    dispatch(fetchCategories())
  },[dispatch])

  const handleCategoryClick = (id) => console.log(id)

  return (
    <>
      {error && <div className="alert alert-danger">Призошла ошибка {error}</div>}
      {loading === 'pending' ? <Preloader/> :
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={() => handleCategoryClick(0)}>Все</a>
          </li>
          {categories && categories.map(cat =>
            <li className="nav-item" key={cat.id}>
              <a className="nav-link" href="#" onClick={() => handleCategoryClick(cat.id)}>{cat.title}</a>
            </li>)}
        </ul>}
    </>
  )
}
