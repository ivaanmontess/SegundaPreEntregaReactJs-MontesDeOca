import {useState, useEffect} from 'react'
import ItemsList from "../ItemsList/ItemsList"
import "./ItemListContainer.css"
import Spinner from '../Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {categoryId} = useParams();

  

  useEffect(() => {
    setLoading(true)

    const db = getFirestore(); //Instancia de base de datos
    //ahora llamo a la base de datos con la const myProducts
    const myProducts = categoryId ? query(collection(db,"item"), where("category","==",categoryId))
    : collection(db,"item");

    getDocs(myProducts).then((res) => {
      const newProducts = res.docs.map((doc) => {
        const data = doc.data();
        return {id: doc.id, ...data};

      });
      setProducts(newProducts);
    })
    .catch((error) => console.log("Error buscando items", error))
    .finally(() => setLoading(false));
  }, [categoryId]) 

 

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? <Spinner /> : products && <ItemsList products={products}/>}
    </div>
  )
}

export default ItemListContainer