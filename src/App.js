import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react";
import { calculateTotal } from "./Features/Cart/cartSlice";
// import cartItems from "./cartItems";
import Modal from "./components/Modal";
// import{open,close} from "./Features/Modal/modalSlice"
function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=>store.cart)
  const {isOpen} = useSelector((store)=>store.modal)
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
