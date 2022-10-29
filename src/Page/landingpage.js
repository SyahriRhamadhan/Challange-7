import {Navbars, Hero, Services, Whyus, Testimonial, Banner, Footer, Faq} from "../components";
const Home =()=>{
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