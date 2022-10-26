
import { Navbar, Nav , Offcanvas, Container, Button} from 'react-bootstrap';
import logo from "../assets/img/logo.png"

const Navbars = ()=>{
    return(
        <Container className=''>
        {['md'].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#" ><img src={logo} alt="logo"/></Navbar.Brand>
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
                  <Nav.Link href="#action1">Our Services</Nav.Link>
                  <Nav.Link href="#action2">Why Us</Nav.Link>
                  <Nav.Link href="#action2">Testimonial</Nav.Link>
                  <Nav.Link href="#action2">FAQ</Nav.Link>
                </Nav>
                <Button variant='success' className='btn btn-green'>Register</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Container>
    )
}
export default Navbars