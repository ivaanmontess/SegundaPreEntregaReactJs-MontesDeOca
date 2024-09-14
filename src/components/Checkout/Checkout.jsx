import { useState, useContext } from 'react';
import { CartContext } from '../../context/ThemeContext/CartContext/CartProvider';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";


const Checkout = () => {
    const {cart, getTotal, getTotalProduct, clearCart} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");

    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleForm = (e) => {

        e.preventDefault();
        console.log("Holiss");
        if(!nombre || !apellido || !celular || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos papito/mamita");
            return;
        }

        if(email !== emailConfirmacion){
            setError("Los mails no coinciden rey/reina");
            return;
        }

        const db = getFirestore();
        const order = {
            items: cart.map((product) => ({
                id: product.product.id,
                name: product.product.name,
                quantity: product.quantity,
                stock: product.product.stock,
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            celular,
            email,
        };
        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db,"item", productOrder.id)
                const productDoc = await getDoc (productRef);
                const stock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: stock - productOrder.quantity,
                });
            })
        )
        .then(() => {
            addDoc(collection(db,"orders"),order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error) => {
                console.log("Error subiendo stock", error);
                setError("No se puede actualizar el stock, intenta de nuevo");
            })
        })
        .catch((error) => {
            console.log("Error subiendo stock", error);
            setError("No se puede actualizar el stock, intenta de nuevo");
        })
    };
  return (
    <div>
        <h2>Ingresa tus datos</h2>

        <div>
        {cart.map((product) => {
                <div key={product.product.id}>
                    <p>{""} {product.product.name}</p>
                    <p>{product.product.price}</p>
                    <hr/>
                </div>
            })}
        </div>

        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Celular</label>
                <input type="number" onChange={(e) => setCelular(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email de confirmacion</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div> 

            <button type="Submit">Generar orden de compra</button>

            {error && <p>{error}</p>}

            {orderId && (
                <p>Gracias por tu compra rey! Tu numero de orden es : {orderId}
                {""}</p>
            )}
        </form>

    </div>
  )
}

export default Checkout;
