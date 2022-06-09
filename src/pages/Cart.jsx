export default function Cart({id, size, quantity}) {
  const getStorageItems = () => {
    const saved = localStorage.getItem('items');
    return JSON.parse(saved) || [];
  }

  const handleAddToBasket = () => {
    const storage = getStorageItems();
    console.log(storage.length)
    if(storage.length > 0) {
      //if(storage.find(item => item))
    } else {
      storage.push({id, quantity, activeSize});
      localStorage.setItem('items', JSON.stringify(storage));
    }
  }
}
