import {fetchProducts, setStateOffset, setStateQuery} from '../../thunks/productsThunk';
import { useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function SearchForm() {

  const dispatch = useDispatch();
  const query = useSelector(state => state.products.searchQuery)
  const activeCategory = useSelector(state => state.categories.active)

  const {state} = useLocation();

  const [word, setWord] = useState('')

  useEffect(() => {
    if(state.topQuery) {
      setWord(state.topQuery)
      state.topQuery = ''
    }
  }, [query])

  const handleSearch = (e) => {
    setWord(e)
    if(e.trim().length > 3) {
      dispatch(setStateQuery(word))
      dispatch(fetchProducts(activeCategory, e))
      dispatch(setStateOffset(activeCategory, e, 12));
    }
  }

  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" value={word} placeholder="Поиск" onChange={(e) => handleSearch(e.target.value)} />
    </form>
  )
}
