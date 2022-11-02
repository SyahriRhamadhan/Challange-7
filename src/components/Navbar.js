
import { Navbar, Nav , Offcanvas, Container, Button} from 'react-bootstrap';
import logo from "../assets/img/logo.png"
import LinkContainer from 'react-router-bootstrap/LinkContainer';
const Navbars = ()=>{
    return(
        <Container className=''>
        {['md'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <LinkContainer to='/'>
              <Nav.Link>
              <Navbar.Brand ><img src={logo} alt="logo"/></Navbar.Brand>
              </Nav.Link>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#services">Our Services</Nav.Link>
                  <Nav.Link href="#whyus">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <Button variant='success' className='btn btn-green rounded-1'>Register</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Container>
    )
}
export default Navbars