import axios from 'axios'
import { disconnect } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Detail = () => {
    let { id } = useParams();
    console.log(id)
    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id)
        .then( res=> setDetail( {...res.data} )).catch(function (error) {
            // handle error
            console.log(error);
          })
    }, [])
    

    return (
        <div>
             {detail.title}
             {detail.price}
             {detail.description}  
        </div>
    )
}
