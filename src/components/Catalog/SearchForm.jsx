import { fetchProducts } from '../../thunks/productsThunk';
import {useDispatch} from "react-redux";

export default function SearchForm() {

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if(e.trim().length > 3) {
      dispatch(fetchProducts(`/api/items?q=${e}`))
    }
  }

  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" placeholder="Поиск" onChange={(e) => handleSearch(e.target.value)} />
    </form>
  )
}
