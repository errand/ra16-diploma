import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import { fetchProducts } from '../../thunks/productsThunk'
import { useEffect } from "react";
import ProductItem from "./ProductItem";

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)
  const query = useSelector(state => state.products.searchQuery)

  useEffect(() => {
    dispatch(fetchProducts(`/api/items${query ? '?q='+query : ''}`));
    console.log(query)
  },[dispatch])

  return (
    products && products.length > 0 ? <>
        <div className="row">
        {error && <div className="alert alert-danger">Призошла ошибка {error}</div>}
        {loading === 'pending' ? <Preloader/> :
          <div className="row">
            {products.map(product => <ProductItem  key={product.id} product={product} />)}
          </div>}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
      </> : <div>Nothing found</div>
  )
}
