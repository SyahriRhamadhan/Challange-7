import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Img1 from "../assets/img/img_photo-1.png"
import Img2 from "../assets/img/img_photo-2.png"
import Img3 from "../assets/img/img_service.png"
const Owlcarousel =()=>{
    return(
        <OwlCarousel className="owl-theme" center={true} items="3" loop margin={10} dots={false} nav={false}
                responsive={{
                    0: {
                        items: 1,
                    },
                    600:{
                        items: 2,
                    },
                    1000:{
                        items: 2
                    }
                }}
            >
                <div class='item'>
                    <img src={Img1} alt='img corausel 1'/>
                </div>
                <div class='item'>
                    <img src={Img2} alt='img corausel 2'/>
                </div>
                <div class='item'>
                    <img src={Img3} alt='img corausel 3'/>
                </div>
            </OwlCarousel>
    )
}
export default Owlcarousel