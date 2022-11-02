import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Img1 from "../assets/img/img_photo-1.png"
import Img2 from "../assets/img/img_photo-2.png"
import { Col, Row, Container} from "react-bootstrap";
import {BsFillStarFill} from "react-icons/bs";
const Owlcarousel =()=>{
    return(
        <Container fluid>
            <OwlCarousel className="owl-theme owl-carousel" center={true} items="3" loop margin={10} dots={false} 
                nav
                // navText={[
                //     '<span class="arrow prev">‹</span>',
                //     '<span class="arrow next">›</span>'
                //   ]}
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
                <div className='item px-4 body'>
                    <Row className="  py-4 rounded-3">
                        <Col md={3} className='my-auto'>
                        <img src={Img1} alt='img corausel 1' className="m-auto w-auto img-user"/>
                        </Col>
                        <Col md className='  '>
                            <div className="mb-3">
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit? Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores eligendi, illo quidem modi fugit.</p>
                            <p class="fw-bold">John Dee 32, Bromo</p>
                        </Col>
                    </Row>
                </div>
                <div className='item pe-4 body'>
                    <Row className="  py-4 rounded-3">
                        <Col md={3} className='my-auto'>
                        <img src={Img2} alt='img corausel 2' className="m-auto w-auto img-user"/>
                        </Col>
                        <Col md className='  '>
                            <div className="mb-3">
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit? Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores eligendi, illo quidem modi fugit.</p>
                            <p class="fw-bold">Sarah Cornor 32, Bromo</p>
                        </Col>
                    </Row>
                </div>
                <div className='item body'>
                    <Row className="  py-4 rounded-3">
                        <Col md={3} className='my-auto'>
                        <img src={Img1} alt='img corausel 3' className="m-auto w-auto img-user"/>
                        </Col>
                        <Col md className='  '>
                            <div className="mb-3">
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                                <BsFillStarFill className="icon-star"/>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit? Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores eligendi, illo quidem modi fugit.</p>
                            <p class="fw-bold">John Dee 32, Bromo</p>
                        </Col>
                    </Row>
                </div>
            </OwlCarousel>
            {/* <div className="w-auto m-auto bg-info">
                <Row>
                    <Col className="text-center">
                        <Button className="mx-1 "> <BsChevronLeft className="btn-left"/></Button>
                        <Button className="mx-1 "> <BsChevronRight className="btn-right"/></Button>
                    </Col>
                </Row>
            </div> */}
        </Container>
    )
}
export default Owlcarousel