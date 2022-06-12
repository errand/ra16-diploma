import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {countItems} from "../thunks/cartThunk";
import getStorageItems from "../tools/localStorage"

export default function Cart() {

  const dispatch = useDispatch();
  const miniLocalStorage = getStorageItems();
  const [total, setTotal] = useState(0);
  const [storage, setStorage] = useState(miniLocalStorage)
  const [cartTotal, setCartTotal] = useState(null)

  useEffect(()=>{
    setTotal(new Intl.NumberFormat('ru-RU').format(storage.reduce((prev, next) => prev + +next.price * +next.quantity, 0)));
    setCartTotal(storage.reduce((prev, next) => prev + +next.quantity, 0));
    dispatch(countItems(cartTotal));
  }, [storage]);

  const hanldeDelete = (nanoId) => {
    const newStorage = storage.filter(item => item.nano !== nanoId)
    localStorage.setItem('items', JSON.stringify(newStorage));
    setStorage(newStorage)
  }

  const handleOrder = () => {

  }

  return (
    <>
      {storage && storage.length > 0 &&
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
          </thead>
          <tbody>
          {storage.map(item =>
            <tr key={item.nano}>
              <td scope="row">{item.id}</td>
              <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
              <td>{item.activeSize}</td>
              <td>{item.quantity}</td>
              <td>{new Intl.NumberFormat('ru-RU').format(item.price)}</td>
              <td>{new Intl.NumberFormat('ru-RU').format(item.price * item.quantity)} руб.</td>
              <td>
                <button className="btn btn-outline-danger btn-sm" onClick={() => hanldeDelete(item.nano)}>Удалить</button>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>{total} руб.</td>
          </tr>
          </tbody>
        </table>
      </section>}
      {storage && storage.length > 0 &&
        <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{maxWidth: 30 + 'rem', margin: 0 + 'auto'}}>
        <form className="card-body">
        <div className="form-group">
        <label htmlFor="phone">Телефон</label>
        <input className="form-control" id="phone" placeholder="Ваш телефон" />
        </div>
        <div className="form-group">
        <label htmlFor="address">Адрес доставки</label>
        <input className="form-control" id="address" placeholder="Адрес доставки" />
        </div>
        <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="agreement" />
        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
        </div>
        <button type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>
        </div>
        </section>
      }
    </>
  )
}
