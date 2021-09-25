import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import "./Shop.css"

const Shop = () => {
    const [cart, setCart] = useState([]);

    // Add judge
    const handleAddJudges = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch("./projectData.json")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <div>
            {/* Card div */}
            <div className="row m-3">
                <div className="col-md-9">
                    <div className="row row-cols-md-3 g-3">
                        {
                            persons.map(person =>
                                < Person
                                    person={person}
                                    key={person.id}
                                    handleAddJudges={handleAddJudges}
                                ></Person>
                            )}
                    </div>
                </div>


                {/* cart div */}
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    >
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;