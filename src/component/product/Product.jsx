import React, {useState, useEffect} from "react";
import Skeleton  from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
const Product=()=>{

    const {id}=useParams();
    const [Product, setProduct]=useState([])
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        const getProduct=async  ()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
        
    }, [])
    const Loading=()=>{
        return(
            <>
                <div className="col-md-6 bg-dark">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}} >
                    <Skeleton  height={50} weight={300} />
                    <Skeleton  height={75} />
                    <Skeleton  height={25} weight={150} />
                    <Skeleton  height={50} />
                    <Skeleton  height={150} />
                    <Skeleton  height={50} weight={100} />
                    <Skeleton  height={50} weight={100} style={{marginLeft:6}} />
                </div>

            </>
        )
    }

    const ShowProduct=()=>{
        console.log(Product)
        return(
            <>
            <div className="col-md-6 ">
                <img  src={Product.image} alt={Product.title} height={400} weight={400} />
                </div>

                <div className="col-md-6"> 
                <h1 className="text-uppercase  text-black-50">{Product.category}</h1>
                <h1 className="display-5">{Product.title}</h1>
                <p className="lead fw-bolder"> Rating {Product.rating && Product.rating.rate} <i className="fa fa-star"></i> </p>
                <h3 className="display-6 fw-bolder">${Product.price}</h3>
                <p className="lead">{Product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2">Add to cart</button>
                <NavLink className="btn btn-dark ms-3 py-2" to='cart' >Go to cart</NavLink>
                
            </div>

            </>
            
        )
    }

    return(
        <>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
        </>
    )
}

export default Product;