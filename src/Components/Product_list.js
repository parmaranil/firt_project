import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Product_list() {
    const [product, setproduct] = useState([]);
    useEffect(() => {
        getproduct();
    })
    const getproduct = async () => {
        let result = await fetch("http://localhost:5001/products_item");
        result = await result.json();
        setproduct(result);
    }
    const deleteitem = async (id) =>{
        // console.warn(id,"hjjjjjjjj");
        let result =await fetch(`http://localhost:5001/product/${id}`,{
            method:'delete'
        })
        result = await result.json();
        if(result){
            // alert("record deleted");
            getproduct();
        }
    }
    return (
        <>
            <div>Product List</div>
            <table className="table">
                <thead className="bg-light table-hover ">
                    <tr>
                        <th>sr.NO</th>
                        <th>Model Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item, index)=>
                        <tr key={item._id}>
                            <th>{index +1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.company}</td>
                            <td><button onClick={()=>deleteitem(item._id)} className="btn btn-dark text-white">Delete</button>
                                <Link to={'/Update/'+item._id}>Update</Link>
                            </td>
                            
                        </tr>
                        )
                    }
                </tbody>
            </table>
            
        </>
    )
}

export default Product_list;
