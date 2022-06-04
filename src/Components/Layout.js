import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import { Collapse } from "react-bootstrap";
const Layout = () => {

    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        console.warn("Apple");
        localStorage.clear();
        navigate('/Signup')
    }
    // const [togglenav, settogglenav] = useState(false);
    // useEffect(() => {
    //     const mycollapse = document.getElementById('mynavbar')
    //     const bscollapse = new Collapse(mycollapse, { togglenav: false })
    //     togglenav ? bscollapse.show() : bscollapse.hide()
    // onClick={() => settogglenav(togglenav => !togglenav)}
    // })

    return (
        <>
        
            {auth ?
                <div className="container-fluid af-layout-navbar">

                    <nav className="navbar navbar-expand-lg af-navbar-text-color">
                        <span className="navbar-brand af-navbar-list-item">A.F.C</span>
                        <button className="navbar-toggler" data-toggle="collapse"
                            data-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav mr-auto af-navbar-list-item">
                                <li className="nav-item"><Link to="/" className="nav-link">Products</Link></li>
                                <li className="nav-item"><Link to="/Add" className="nav-link">Add Products</Link></li>
                                <li className="nav-item"><Link to="/Update/:id" className="nav-link">Update Products</Link></li>
                                <li className="nav-item"><Link onClick={logout} to="/Signup"  className="nav-link">Logout ({JSON.parse(auth).name}) </Link></li>
                          
                                {/* {
                            auth ? <li className="nav-item"><Link onClick={logout} to="/Signup" className="nav-link">Logout</Link></li>
                            :   <>
                            <li className="nav-item"><Link to="/Signup" className="nav-link">SignUp</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                            </>
                        } */}
                                {/* <li className="nav-item">{auth ? <Link onClick={logout} to="/Signup" className="nav-link">Logout</Link>:
                           <Link to="/Signup" className="nav-link">SignUp</Link>}
                        </li>
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li> */}
                            </ul>
                            <form className="form-inline">
                                <input type="search" className="form-control mr-sm-2" placeholder="Search"></input>
                                <button className="btn btn-outline-danger my-2 my-sm-0 af-navbar-search ">Search</button>
                            </form>
                        </div>
                    </nav>

                </div>

                : <div className="container-fluid af-layout-navbar">
                    <nav className="navbar  navbar-expand-lg af-navbar-text-color">
                        <ul className="ml-auto navbar-nav af-navbar-list-item">
                            <li className="nav-item"><Link to="/Signup" className="nav-link">SignUp</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}

export default Layout;