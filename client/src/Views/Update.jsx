import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const Update = () => {
    let { id } = useParams();
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id)
        .then( res=> {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
            }
         ).catch(function (error) {
            // handle error
            console.log(error);
          })
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/update/"+id, {
            title,
            price,
            description
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button>Crear</button>
          
        </form>
        </div>
    )
}
