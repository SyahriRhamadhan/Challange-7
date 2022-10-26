import { Container, Card, Button } from "react-bootstrap"

const Banner =()=>{
    return(
        <Container>
            <Card variant='bgblue' style={{ width: '80rem', height:'17em' }} className="text-center ">
                <Card.Body className="getting-started text-white">
                    <Card.Title className="fw-bold mt-5">Sewa Mobil di (Lokasimu) Sekarang</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                    <Button variant="success" className="mt-5">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
} 
export default Banner