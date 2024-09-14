import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import CartProvider from "./context/ThemeContext/CartContext/CartProvider";
import Cart from "./components/Cart/Cart";
import { db } from "./main";
import { getFirestore, collection, getDocs, doc } from  "firebase/firestore";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore ();
    const itemCollection = collection(db, "item");
    getDocs(itemCollection).then((snapshot) =>{
      setProduct(snapshot.docs.map((doc) =>
      ({id: doc.id, ...doc.data() })));
    });
  }, []);
  console.log(product);

 
  return (
    <>
    <ThemeProvider>
      <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>

          <Route path="/item/:id" element={<ItemDetailContainer/>}/>

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element ={<Checkout/>}/>
          <Route path="*" element={<Error/>}/>
          

         
        </Routes>

        <Footer />
      </BrowserRouter>
      </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
