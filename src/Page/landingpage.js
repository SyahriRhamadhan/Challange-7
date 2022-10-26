import React, {useEffect} from "react";
import {Navbars, Hero, Services, Whyus, Testimonial, Banner} from "../components";
const Home =()=>{
    useEffect(()=>{
        document.title ="BCR | Home";
    },[])
    return(
        <div>
            <div className="body">
                <Navbars/>
                <Hero/>
            </div>
            <div>
                <Services/>
                <Whyus/>
                <Testimonial/>
                <Banner/>
            </div>
        </div>
    )
}
export default Home