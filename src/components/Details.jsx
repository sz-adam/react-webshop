import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function Details({product}) {
  const { id } = useParams();
  console.log(id)

 
  return (
    <div>
      data
    </div>
  )
}
