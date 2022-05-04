import React from "react";
import Products from "../products/Products";

const Home=()=>{
    return(
        <>
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="./img/bg1.jpg" alt="background" height={400} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                    <h5 className="card-title display-3 fw-bolder mb-3">New SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Products /> 
        </>
    )
}

export default Home;