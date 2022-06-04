import './App.css';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login'
import Product from './Components/Product';
import Product_list from './Components/Product_list';
import UpdateProduct from './Components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Product_list/>}></Route>
            <Route path="/Add" element={<Product />}></Route>
            <Route path="/Update/:id" element={<UpdateProduct />}></Route>
            <Route path='/Logout' element={<h1>Logout</h1>}></Route>
          </Route>

          <Route path='/login' element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
