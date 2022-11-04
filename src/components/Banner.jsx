import { Container, Card, Button, Nav } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
const Banner = () => {
    return (
        <Container className='mt-5'>
            <Card style={{ width: '80rem', height: '17em' }} className='text-center '>
                <Card.Body className='getting-started text-white'>
                    <h1 className='fw-bold mt-5'>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                    <LinkContainer to='/Searchcar' className='mt-5' >
                        <Nav.Link>
                            <Button variant='success'>Mulai Sewa Mobil</Button>
                        </Nav.Link>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Container >
    )
}
export default Banner