import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ListProduc = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                //setLoaded(true);
            });
    },[])
    console.log(product);
    return (
        <div>
            <ul>
            {
                product?.map((product, l) =>
                {
                   return <li key={l}> {product.title} {product.price} {product.description}</li> 
                }
                )
            }
            </ul>
        </div>
    )
}
