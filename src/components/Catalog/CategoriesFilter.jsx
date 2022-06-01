import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import { fetchCategories, setActiveCategory } from '../../thunks/categoriesThunk';
import { fetchProducts } from '../../thunks/productsThunk';
import {useEffect, useState} from "react";

export default function CategoriesFilter() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.data)
  const loading = useSelector(state => state.categories.loading)
  const error = useSelector(state => state.categories.error)

  const [active, setActive] = useState(0)

  useEffect(() => {
    dispatch(fetchCategories());
  },[dispatch])

  const handleCategoryClick = (id) => {
    setActive(id);
    dispatch(setActiveCategory(id));
    dispatch(fetchProducts(`/api/items?categoryId=${id}`));
  };

  return (
    <>
      {error && <div className="alert alert-danger">Призошла ошибка {error}</div>}
      {loading === 'pending' ? <Preloader/> :
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item">
            <a className={active === 0 ? "nav-link active" : "nav-link" } href="#" onClick={() => handleCategoryClick(0)}>Все</a>
          </li>
          {categories && categories.map(cat =>
            <li className="nav-item" key={cat.id}>
              <a className={active === cat.id ? "nav-link active" : "nav-link" } href="#" onClick={() => handleCategoryClick(cat.id)}>{cat.title}</a>
            </li>)}
        </ul>}
    </>
  )
}
