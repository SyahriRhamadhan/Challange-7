import { Container, Row } from 'react-bootstrap'
const Testimonial = ()=>{
    return(
        <Container fluid className='mt-5' id='testimonial'>
            <Row>
                <div className='col-md text-center'>
                    <h3 className='fw-bold'>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
            </Row>
        </Container>
    )
}
export default Testimonial