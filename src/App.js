import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Product from './pages/product';
import FormContent from "./pages/addnewproduct.jsx"
import Productdetailpage from './pages/productdetailpage';
import UpdateForm from './pages/updateproduct';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <NavBar></NavBar>
         <Sidebar></Sidebar>
         <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/products' element={<Product></Product>} />
          <Route path='/products/addnew' element={<FormContent></FormContent>} />
          <Route path='/updateproducts/:productID' element={<UpdateForm></UpdateForm>} />
          <Route path='/products/:productID' element={<Productdetailpage></Productdetailpage>} />
         </Routes>
         
      </header>
    </div>
  );
}

export default App;
