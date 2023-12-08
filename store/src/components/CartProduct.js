import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <div style={{ borderBottom: "1px solid #ddd", padding: "10px", marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <img
                src={productData.image}
                alt={productData.title}
                style={{ height: "80px", width: "80px", objectFit: "cover", marginRight: "10px" }}
            />
            <div style={{ flex: 1 }}>
                <h3>{productData.title}</h3>
                <p>Quantity: {quantity}</p>
                <p>Total: ₱{(quantity * productData.price).toFixed(2)}</p>
                <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            </div>
        </div>
    );
}

export default CartProduct;
