import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>

          <Route path="/item/:id" element={<ItemDetailContainer/>}/>

          <Route path="*" element={<Error/>}/>
          

         
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
