import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import '../styles/Details.css'
import DetailsImage from './DetailsImage';

import DetailsButton from './DetailsButton';
import Stars from './Stars';


export default function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState([])
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
    <div className="detailsContainer">
      <div className="detailsImageContainer">
        <DetailsImage details={details} />
      </div>
      <div className="detailsTitleContainer">
        <p className="detailsTitle">{details.title}</p>
        <p className="detailsCategory">{details.category}</p>
        <p className="detailsDescription">{details.description}</p>
        <Stars rating={details.rating && details.rating.rate} count={details.rating && details.rating.count}/>
        <p className="detailsPrice">Price {details.price}</p>
      
        <div className="detailsButtons">
          <DetailsButton details={details}  />
        </div>
      </div>

    </div>

  )
}
