import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

const List = ({ products }) => {
  const history = useHistory();
  console.log(products);

  const handleClick = (product) => {
    history.push(`/inscripcion/${product.id}`)
  };

  return (
    <div className="product-list">
      {products.map((productItem) => (
        <Card className="bg-dark" key={productItem.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productItem.img} />
          <Card.Body>
            <Card.Title className="text-light bg-dark">{productItem.title}</Card.Title>
            <Card.Text className="text-light bg-dark">
              {productItem.description}
            </Card.Text>
            <Button
              onClick={() => handleClick(productItem)}
              className="text-light bg-dark"
              variant="primary"
            >
              Inscribirme
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default List;