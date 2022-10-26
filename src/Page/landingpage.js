import React, {useEffect} from "react";
import {Navbars, Hero, Services, Whyus, Testimonial, Banner, Footer, Faq} from "../components";
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
            <div className="body2">
                <Services/>
                <Whyus/>
                <Testimonial/>
                <Banner/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}
export default Home