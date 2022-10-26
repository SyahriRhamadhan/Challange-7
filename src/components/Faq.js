import { Col, Container, Row, Accordion } from "react-bootstrap"

const Faq = ()=>{
    return(
        <Container id='faq'>
            <Row className="mt-5">
                <Col md={5}>
                    <h4 className="fw-bold">Frequently Asked Question</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>
                <Col md>
                <Accordion>
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mb-3">
                        <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                        <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repudiandae?
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mb-3">
                        <Accordion.Header>Berapa hari sebelumnya sebainya booking sewa mobil?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mb-3">
                        <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                        <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repudiandae?
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="">
                        <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                        <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repudiandae?
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>
            </Row>
        </Container>
    )
}
export default Faq