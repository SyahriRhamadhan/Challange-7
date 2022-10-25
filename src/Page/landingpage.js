import React, {useEffect} from "react";
import {Navbars, Hero} from "../components";
const Home =()=>{
    useEffect(()=>{
        document.title ="BCR | Home";
    },[])
    return(
        <div className="body">
            <Navbars/>
            <Hero/>
        </div>
    )
}
export default Home