import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import '../styles/Details.css'


export default function Details() {
  const { id } = useParams();

  const [details, setDetails] = useState([])
  console.log(details)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {

        setDetails(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div className='detailsContainer'>
      <div className='detailsImageContainer'>
        <div className="detailsImage">
          <div className="largeDiv">
            <img
            className="card-img"
            src={details.image}
            alt={details.name}
          /></div>
          <div className='smallDiv'>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
      <div className="detailsTitleContainer">
      <p>{details.title}</p>
        <p>{details.category}</p>       
        <p>{details.description}</p>   
       
        <p>{details.price}</p>
      </div>
    </div>
  )
}
