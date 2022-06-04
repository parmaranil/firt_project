import React from "react";
import { useState } from 'react'

function Product() {
    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [company, setcompany] = useState();
    const addproduct = async () => {
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5001/add-product',
        {
            method: 'post',
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.warn(result)
    }

    return (
        <div className="container">
            <form className="form">
                <div className="form-input mx-auto mt-4">
                    <label>Name Product</label>
                    <input type='text' value={name} onChange={(e) => { setname(e.target.value) }}
                        className="form-control" placeholder="Name Product"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Price</label>
                    <input type='text' value={price} onChange={(e) => {setprice(e.target.value)}}
                        className="form-control" placeholder="Product Price"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Category</label>
                    <input type='text' value={category} onChange={(e) => {setcategory(e.target.value)}}
                        className="form-control" placeholder="Product Category"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Company</label>
                    <input type='text' value={company} onChange={(e) => {setcompany(e.target.value)}}
                        className="form-control" placeholder="Product Company"></input>
                </div>
                <div>
                    <button onClick={addproduct} className="btn btn-primary mt-3">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Product;