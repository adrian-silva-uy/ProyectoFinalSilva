import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        if (!name || !lastName || !phone || !email || !emailConfirmation) {
            setError("Debe completar todos los campos.")
            return;
        }

        if (email !== emailConfirmation) {
            setError("Los campos email & email confirmación no coinciden, Verifique.");
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                articulo: product.item.articulo,
                quantity: product.quantity
            })),
            total: totalQuantity,
            totalPrice : totalPrice,
            name,
            lastName,
            phone,
            email,
            date: new Date()
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "productos", productOrder.id);
                const productDoc = await getDoc(productRef);
                const actualStock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: actualStock - productOrder.quantity
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "orders"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        clearCart();
                    })
                    .catch((error) => {
                        setError("Error al crear la Orden.");
                    })
            })
            .catch((error) => {
                setError("Error al actualizar el Stock. Intente nuevamente.");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formHandler} className="formulario">
                {cart.map(product => (
                    <div key={product.id}>
                        <p>
                            {product.item.articulo} x {product.quantity}
                        </p>
                        <p>Precio $ {product.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <p>Importe Total: $ {totalPrice} </p>
                <hr />

                <div className="form-group">
                    <label htmlFor="name"> Nombre </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"> Apellido </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone"> Teléfono </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="emailConfirmation"> Email Confirmación </label>
                    <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit"> Finalizar Compra </button>
            </form>

            {
                orderId && (
                    <strong className="orderId">Gracias por su compra. Su número de orden es {orderId} </strong>
                )
            }
        </div>
    )
}

export default Checkout
