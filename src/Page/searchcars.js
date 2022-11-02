import { Navbars, Hero, Footer, Searchcars } from "../components";
import { Helmet } from 'react-helmet';
const Searchcar =()=>{
    return(
        <div>
            <Helmet>
                <title>BCR | Search Car</title>
            </Helmet>
            <div className="body">
                <Navbars/>
                <Hero/>
            </div>
            <div className="body2">
                <Searchcars/>
                <Footer/>
            </div>
        </div>
    )
}
export default Searchcar