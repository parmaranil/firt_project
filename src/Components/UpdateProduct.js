import React, { useEffect } from "react";
import { useState } from 'react'
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { useParams, useNavigate } from "react-router-dom";
function UpdateProduct() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])
    const getProductDetails = async () => {
        console.log(params);
        let result = fetch(`http://localhost:5001/product/${params.id}`);
        result = await (await result).json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5001/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        navigate('/')

    }

    return (
        <div className="container">
            <form className="form">
                <div className="form-input mx-auto mt-4">
                    <label>Name Product</label>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }}
                        className="form-control" placeholder="Name Product"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Price</label>
                    <input type='text' value={price} onChange={(e) => { setPrice(e.target.value) }}
                        className="form-control" placeholder="Product Price"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Category</label>
                    <input type='text' value={category} onChange={(e) => { setCategory(e.target.value) }}
                        className="form-control" placeholder="Product Category"></input>
                </div>

                <div className="form-input mx-auto mt-3">
                    <label>Product Company</label>
                    <input type='text' value={company} onChange={(e) => { setCompany(e.target.value) }}
                        className="form-control" placeholder="Product Company"></input>
                </div>
                <div>
                    <button type="button" onClick={updateProduct} className="btn btn-primary mt-3">Update Product</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct;