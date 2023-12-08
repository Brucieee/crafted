import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { productsArray, getProductData } from '../productsStore';

function ProductCard(props){
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    const productData = getProductData(product.id);
    console.log('Product Image:', productData.image);

    return(
        <Card>
            <Card.Img variant="top" src={productData.image} alt={product.title} style={{ height: '400px', objectFit: 'cover' }}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>₱{product.price}</Card.Title>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={()=>cart.addOneToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;