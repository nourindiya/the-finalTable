import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props || {};

    const totalReduce = (prevValue, currentValue) => prevValue + currentValue.salary;
    const total = cart.reduce(totalReduce, 0).toFixed(2);

    return (
        <div className="cart">
            <h2 className="mt-2 text-center"><i class="fas fa-user-friends"></i> Judge Added: {cart.length}</h2>
            <h4 className="text-center">Amount: $ {total}</h4>
            < ul>
                <h2 className="fw-normal text-center">Judges Name</h2>
                {

                    cart.map(person => <li>{person.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;