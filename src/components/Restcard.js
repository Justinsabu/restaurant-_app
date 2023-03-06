import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:'none', color:'black'}}>
      <Card className='m-3' style={{ width: '300px', height:'605px'}}>
      <Card.Img variant="top" src={restaurant.photograph} style={{ width: '300px', height:'425px'}}  />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
        {restaurant.neighborhood}
        </Card.Text>
        {restaurant.address}

        <Card.Text>
        </Card.Text>



      </Card.Body>
    </Card>

        
      </Link>
        
    </Col>
  )
}

export default Restcard