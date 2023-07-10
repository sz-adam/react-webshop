import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import '../styles/Details.css'
import DetailsImage from './DetailsImage';

import DetailsButton from './DetailsButton';


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
    <div className="detailsContainer">
      <div className="detailsImageContainer">
        <DetailsImage details={details} />
      </div>
      <div className="detailsTitleContainer">
        <p className="detailsTitle">{details.title}</p>
        <p className="detailsCategory">{details.category}</p>
        <p className="detailsDescription">{details.description}</p>
        <p className="detailsRating">Rate {details.rating && details.rating.rate}</p>
        <p className="detailsPrice">Price {details.price}</p>

        <div className="detailsButtons">
        <DetailsButton details={details}/>
        </div>
      </div>

    </div>

  )
}
