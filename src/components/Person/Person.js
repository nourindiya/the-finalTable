import React from 'react';
import "./Person.css"

const Person = (props) => {
    const { name, img, age, salary, nationality, occupation } = props.person || {};
    return (
        <div className="col-md-4 g-2">
            <div className="card mb-3 mt-3 h-80" >
                <div className="col g-0">
                    <div className="col">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text">Occupation: {occupation}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">Nationality: {nationality}</p>
                            <p className="card-text">Salary: ${salary}</p>

                            {/* Buttton */}
                            <button className="btn"
                                onClick={() => props.handleAddJudges(props.person)} >
                                <i className="fas fa-cart-plus"></i>
                                Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Person;