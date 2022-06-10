import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Cart() {

  const {state} = useLocation();

  const getStorageItems = () => {
    const saved = localStorage.getItem('items');
    return JSON.parse(saved) || [];
  }

  useEffect(()=>{
    console.log(state)
    const storage = getStorageItems();
    console.log(storage.length)
    if(storage.length > 0) {
      //if(storage.find(item => item))
    } else {
      //storage.push({id, quantity, size});
      localStorage.setItem('items', JSON.stringify(storage));
    }
  })

  const handleOrder = () => {

  }
}
