import React from "react";
import Table from "react-bootstrap/Table";
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  function getalldata()
  {
    fetch("http://localhost:9000/products")
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }

  function deleteProduct(productid)
  {
    Swal.fire(
      {
        title:"Are You Sure You Want To Delete ?",
        showCancelButton:true,
      }
    ).then(data=>{
      if(data.isConfirmed)
      {
        fetch(`http://localhost:9000/products/${productid}`,{
          method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) => getalldata());
      }
    })
    
  }

  useEffect(() => {
    getalldata();
  });
  console.log(product);
  return (
    <>
    <div id="container" className="container">
      <h1 id="h_product">Our Products</h1>
      <Link to="/products/addnew" className="text-decoration-none" id="btn_product">add new product</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <>
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td>
                    <Link to={`/products/${product.id}`} id="tbl_btn" className="bg-info m-2 text-decoration-none">view</Link>
                    <Link to={`/updateproducts/${product.id}`} id="tbl_btn" className="bg-warning m-2 text-decoration-none">edit</Link>
                    <button id="tbl_btn" className="bg-danger m-1" onClick={()=>{
                      deleteProduct(product.id)
                    }}>delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default Product;
