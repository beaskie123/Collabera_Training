import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProductScreen() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
    const result = await axios.get('api/products');
    setProducts(result.data)
  };
  fetchData()
}, [])
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
      </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
