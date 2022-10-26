import { Col, Container, Row } from "react-bootstrap"
import Imgservices from "../assets/img/img_service.png"
import { FiCheck } from "react-icons/fi";
const Services = ()=>{
    return(
        <Container id="services">
            <Row className="mt-5 p-5">
                <Col md={6}>
                    <img className="image-fluid" src={Imgservices} alt="img services" />
                </Col>
                <Col md className="ms-5 px-5">
                    <h3 className="text-jutify"><b>Best Car Rental for any kind of trip in (Lokasimu)!</b></h3>
                    <p >Sewa mobil di (lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul className="list-group">
                        <li class="list-group-item border-0"> <FiCheck className="checklist me-2"/> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li class="list-group-item border-0"> <FiCheck className="checklist me-2"/>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li class="list-group-item border-0"> <FiCheck className="checklist me-2"/>Sewa Mobil Jangka Panjang Bulanan</li>
                        <li class="list-group-item border-0"> <FiCheck className="checklist me-2"/>Gratis Antar - Jemput Mobil di Bandara</li>
                        <li class="list-group-item border-0"> <FiCheck className="checklist me-2"/>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Services