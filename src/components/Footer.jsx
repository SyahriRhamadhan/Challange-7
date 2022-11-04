import { Col, Container, Row, Nav } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import Logo from '../assets/img/logo.png'
import FB from '../assets/img/icon_facebook.png'
import IG from '../assets/img/icon_instagram.png'
import Twitter from '../assets/img/icon_twitter.png'
import Twitch from '../assets/img/icon_twitch.png'
import Mail from '../assets/img/icon_mail.png'
const Footer = ()=>{
    return(
        <Container>
            <Row>
                <Col lg={3} sm className='mt-5'>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </Col>
                <Col lg={2} sm className='mt-5 fw-bold'>
                    <p>Our services</p>
                    <p>Why Us</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </Col>
                <Col lg sm className='mt-5'>
                    <p>Connect with us</p>
                    <img src={FB} alt='facebook' className='me-1'/>
                    <img src={IG} alt='Instagram' className='me-1'/>
                    <img src={Twitter} alt='Twitter' className='me-1'/>
                    <img src={Mail} alt='Mail' className='me-1'/>
                    <img src={Twitch} alt='Twitch' className='me-1'/>
                </Col>
                <Col lg sm className='mt-5'>
                    <p>Copyright Binar 2022</p>
                    <LinkContainer to='/'>
                        <Nav.Link>
                        <img src={Logo} alt='logo'/>
                        </Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer