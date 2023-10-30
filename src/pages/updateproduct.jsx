import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function UpdateForm() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  let naviga=useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://localhost:9000/products/${params.productID}`)
      .then(response => {setProduct(response.data);
      })
  }

  function submitForm(e) {
    e.preventDefault();
    Swal.fire({
      title:"product updated succsessfully",
    })

    axios
      .put(`http://localhost:9000/products/${params.productID}`, 
      {
        title:title,
        price:price,
      }
      )
      .then(response => {console.log('Product updated successfully:', response.data);
      })
      naviga('/products')
  }

  return (
    <>
      <div className='container' id='seccontainer'>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Product Title</Form.Label>
            <Form.Control type="text" defaultValue={product.title} onChange={e => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" defaultValue={product.price}  onChange={e => setPrice(e.target.value)} />
          </Form.Group>
          <Button variant="info" className='text-white' type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateForm;