import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function FormContent() {
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState(0);
  let navigate=useNavigate();

  function submitForm(e)
  {
    e.preventDefault();
    Swal.fire(
      {
        title:"product added succsesfully",
      }
    )
    axios.post("http://localhost:9000/products/",
    {
      title,
      price,
    }).then(data=> {console.log(data)})
    navigate('/products');
  }

  return (
    <>
    <div className='container' id='seccontainer'>
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>product title</Form.Label>
        <Form.Control type="text" placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>product price</Form.Label>
        <Form.Control type="text" placeholder="price" onChange={(e)=> setPrice(e.target.value)} />
      </Form.Group>
      <Button variant="info" className='text-white' type="submit">
        Add New
      </Button>
    </Form>
    </div>
    </>
  );
}

export default FormContent;