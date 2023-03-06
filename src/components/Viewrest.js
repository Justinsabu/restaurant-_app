import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
function Viewrest() {

  const urlparams=useParams()
  // console.log(urlparams);




  const [Allrestaurants,setAllrestaurants]= useState([])

  const getRestaurants=async()=>{
      await fetch('/restaurants.json')
      .then((data)=>{
          data.json()
          .then((result)=>{
              setAllrestaurants(result.restaurants)
          })
      })
  }
  // console.log(Allrestaurants);

  useEffect(()=>{
      getRestaurants()
  },[])


  const viewrest=Allrestaurants.find(item=>item.id==urlparams.id)
  console.log(viewrest);


  return (
    <>
    {
      viewrest?(
        <Row className='m-3'>
        <Col className='ms-5'md={4}>
        <Image src={viewrest.photograph} fluid alt='' style={{ width: '400px', height:'525px', borderRadius:'10px'}}/>
        </Col>
        <Col md={7}>
        <ListGroup>
          <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
          <ListGroup.Item><h4>{viewrest.cuisine_type}</h4></ListGroup.Item>
          <ListGroup.Item><h5>{viewrest.neighborhood}</h5></ListGroup.Item>
          <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>
          <ListGroup.Item><Restop op={viewrest.operating_hours}/></ListGroup.Item>
        </ListGroup>
        <Restreview review={viewrest.reviews}/>
        </Col>
    
        </Row>
    
      ):'null'
    }


    </>
  )
}

export default Viewrest