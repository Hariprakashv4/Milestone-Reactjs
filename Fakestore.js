import { useState,useEffect } from "react";
import StarRatings from "react-star-ratings";

export default function JsonTask(){
    const [dat,setdat]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(details=>setdat(details))
    })
    return(

        dat.map((index,value)=>(
            <div className="card mb-2 mt-2 shadow" style={{width:"18rem",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}} >
            <img src={index.image} class="card-img-top" alt="..."style={{height:"10rem"}}/>
            <div className="card-body d-flex flex-column justify-content-between">
            <h6 className="card-title">{index.title}</h6>
            <p className="card-text"><span style={{color:"maroon"}}>Price:</span>{index.price}</p>
            <p className="card-text"><span style={{color:"maroon"}}>Category:</span>{index.category}</p>
            <p className="card-text"><span style={{color:"maroon"}}>Rating:</span>
            <StarRatings
            rating={index.rating.rate}
            starDimension="20px"
            starSpacing="4px"/>
            {index.rating.rate}</p>
            <p className="card-text"><span style={{color:"maroon"}}>InStock:</span>{index.rating.count}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            </div>
        )
        )
    );
}