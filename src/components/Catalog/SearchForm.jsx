import { fetchProducts } from '../../thunks/productsThunk';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function SearchForm() {

  const dispatch = useDispatch();
  const query = useSelector(state => state.products.searchQuery)

  const [word, setWord] = useState('')

  useEffect(() => {
    if(query) {
      setWord(query)
    }
  }, [query])

  const handleSearch = (e) => {
    if(e.trim().length > 3) {
      setWord(e)
      dispatch(fetchProducts(`/api/items?q=${e}`))
    }
  }

  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" value={word} placeholder="Поиск" onChange={(e) => handleSearch(e.target.value)} />
    </form>
  )
}
