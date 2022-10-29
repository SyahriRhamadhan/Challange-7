import { Navbars, Hero, Footer, Searchcars } from "../components";
const Searchcar =()=>{
    return(
        <div>
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