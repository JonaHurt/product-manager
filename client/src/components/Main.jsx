import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListProduc } from './ListProduc'
import { ProductForm } from './ProductForm'

export const Main = () => {
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/list')
            .then(res=>{
                setProduct(res.data);
                //setLoaded(true);
            });
    },[])
    const removeFromDom = ProductId => {
        setProduct(product.filter(product => {
            return product._id != ProductId
        }));
    }
    return (
        <div>
            <ProductForm />
            <ListProduc product={product} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main