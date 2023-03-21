import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch, useSelector } from 'react-redux';


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
    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    let {restaurantList}=result
    console.log(restaurantList);

    useEffect(()=>{
        getRestaurant()
        dispatch(RestListAction())
    },[])

  return (
    <Row>
        {
            restaurantList?.map((item)=>(
                <Restcard restaurant={item}/>
            ))
        }
    </Row>
  )
}

export default Restlist