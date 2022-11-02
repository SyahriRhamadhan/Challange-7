import {Navbars, Hero, Services, Whyus, Testimonial, Banner, Footer, Faq, Owlcarousel} from "../components";
import { Helmet } from 'react-helmet';
const Home =()=>{
    return(
        <div>
            <Helmet>
                <title>BCR | Home</title>
            </Helmet>
            <div className="body">
                <Navbars/>
                <Hero/>
            </div>
            <div className="body2">
                <Services/>
                <Whyus/>
                <Testimonial/>
                <Owlcarousel/>
                <Banner/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}
export default Home