import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productdetailpage = () => {
  const params=useParams();

  const[products,setProducts]=useState([]);
  useEffect(()=>
  {
    fetch(`http://localhost:9000/products/${params.productID}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <>
    <div className='container' id='seccontainer'>
      <Row>
        <Col>
        <img width={500} src={products.image} alt="" />
        </Col>
        <Col>
        <h1>{products.title}</h1>
        <h3>{products.category}</h3>
        <p>{products.description}</p>
        <p>{products.price}</p>
        </Col>
      </Row>
    </div>

      
    </>
  );
}

export default Productdetailpage;
