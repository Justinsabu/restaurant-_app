import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';


function Restlist() {
    const [Allrestaurant,setAllrestaurant]= useState([])

    const getRestaurant=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setAllrestaurant(result.restaurants)
            })
        })
    }
    console.log(Allrestaurant);

    useEffect(()=>{
        getRestaurant()
    },[])
  return (
    <Row>
        {
            Allrestaurant.map((item)=>(
                
                <Restcard restaurant={item}/>
            ))
        }
    </Row>
  )
}

export default Restlist