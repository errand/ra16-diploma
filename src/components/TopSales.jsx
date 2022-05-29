import { useDispatch, useSelector } from "react-redux";
import Preloader from "./Preloader";
import { fetchProducts } from '../thunks/productsThunk'
import { useEffect } from "react";
import ProductItem from "./Catalog/ProductItem";

export default function TopSales() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.data)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    dispatch(fetchProducts('/api/top-sales'))
  },[dispatch])

  return (
    products ? <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {error && <div className="alert alert-danger">Призошла ошибка {error}</div>}
      {loading === 'pending' ? <Preloader/> :
        <div className="row">
          {products.map(product => <ProductItem  key={product.id} product={product} />)}
        </div>}
    </section> : null
        )
}
