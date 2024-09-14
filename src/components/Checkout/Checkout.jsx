import { useState, useContext } from 'react';
import { CartContext } from '../../context/ThemeContext/CartContext/CartProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";


const Checkout = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        console.error('No se encontró el contexto CartContext');
        return null;
    }

    const { cart, getTotal, getTotalProduct, cleanCart } = cartContext;

    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const handleForm = (e) => {

        e.preventDefault();
        console.log("Hola mmm")
    }

    const db = getFirestore();

    const order = {
        items: cart.map((product) => ({
            id: product.product.id,
            name: product.product.name,
            quantity: product.quantity
        })),
        total: getTotal(),
        date: new Date(),
        nombre,
        apellido,
        celular,
        email
    }
    Promise.all(
        order.items.map(async (productOrder) =>{
            const productRef = doc(db,"item",productOrder.id)
            const productDoc = await getDoc(productRef);
            const stock = productDoc.data().stock;

            await updateDoc(productRef,{
                stock: stock - productOrder.quantity,
            });
        })
    ).then(() =>{
        const ordersRef = collection(db, "orders");
        let querySnapshot; // Declarar la variable querySnapshot aquí
        getDocs(query(ordersRef, where("nombre", "==", nombre), where("apellido", "==", apellido), where("celular", "==", celular), where("email", "==", email)))
        .then((snapshot) => {
            querySnapshot = snapshot; // Asignar el valor de snapshot a querySnapshot
            if (querySnapshot.size === 0) {
                // La orden no existe, generar una nueva
                addDoc(collection(db,"orders"),order)
                .then((docRef) => {
                    setOrderId(docRef.id);
                    cleanCart(); // Mueve la llamada a cleanCart() aquí
                })
                .catch((error) =>{
                    console.log("No se puede agregar documento: ", error);
                    setError("No se pudo generar la orden, volve a intenarlo");
                });
            } else {
                // La orden ya existe, no generar una nueva
                console.log("La orden ya existe");
            }
        });
    })
    .catch((error) => {
        console.log("error updating stockkk", error);
        setError("No se puede actualizar el stock papa");
    })
  return (
    <div>
        <h2>Ingresa tus datos</h2>

        <div> {cart.map((product) => (
                <div key={product.id}>
                    <p>{""} {product.product.name}</p>
                    <p>{product.product.price}</p>
                    <hr />
                </div>
            ))}
            
        </div>

        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Celular</label>
                <input type="number" onChange={(e)=> setCelular(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <button type="submit" >Generar orden de compra </button>


            {error && <p>{error}</p>}
            {orderId && (
                <p>Gracias por tu compra! Tu numero de orden es : {orderId}{""}</p>
            )}

        </form>

    </div>
  )
}

export default Checkout;
