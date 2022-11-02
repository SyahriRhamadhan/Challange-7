import { Card, Button, Row, Col } from "react-bootstrap"
import Imgexample from'../assets/images/car01.min.jpg'
import {BsPeople, BsGear, BsCalendar4} from "react-icons/bs";
const Cardcar =()=>{
    return(
        <div>
            <Row className='m-auto'>
                <Col md={4} className='mt-4' >
                <Card style={{ width: '24em' }}>
                    <Card.Body className="mt-3">
                        <Card.Img variant="top" src={Imgexample} />
                        <Card.Title className="mt-4">Nama/Tipe Mobil</Card.Title>
                        <h6 className="fw-bold">Rp 430.000/hari</h6>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                        <BsPeople/> 4 Orang
                        </Card.Text>
                        <Card.Text>
                        <BsGear/> Manual
                        </Card.Text>
                        <Card.Text>
                        <BsCalendar4/> Tahun 2020
                        </Card.Text>
                        <Button variant="success w-100" className='rounded-1 p-2'>Pilih Mobil</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='mt-4' >
                <Card style={{ width: '24em' }}>
                    <Card.Body className="mt-3">
                        <Card.Img variant="top" src={Imgexample} />
                        <Card.Title className="mt-4">Nama/Tipe Mobil</Card.Title>
                        <h6 className="fw-bold">Rp 430.000/hari</h6>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                        <BsPeople/> 4 Orang
                        </Card.Text>
                        <Card.Text>
                        <BsGear/> Manual
                        </Card.Text>
                        <Card.Text>
                        <BsCalendar4/> Tahun 2020
                        </Card.Text>
                        <Button variant="success w-100" className='rounded-1 p-2'>Pilih Mobil</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='mt-4' >
                <Card style={{ width: '24em' }}>
                    <Card.Body className="mt-3">
                        <Card.Img variant="top" src={Imgexample} />
                        <Card.Title className="mt-4">Nama/Tipe Mobil</Card.Title>
                        <h6 className="fw-bold">Rp 430.000/hari</h6>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                        <BsPeople/> 4 Orang
                        </Card.Text>
                        <Card.Text>
                        <BsGear/> Manual
                        </Card.Text>
                        <Card.Text>
                        <BsCalendar4/> Tahun 2020
                        </Card.Text>
                        <Button variant="success w-100" className='rounded-1 p-2'>Pilih Mobil</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='mt-4' >
                <Card style={{ width: '24em' }}>
                    <Card.Body className="mt-3">
                        <Card.Img variant="top" src={Imgexample} />
                        <Card.Title className="mt-4">Nama/Tipe Mobil</Card.Title>
                        <h6 className="fw-bold">Rp 430.000/hari</h6>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                        <BsPeople/> 4 Orang
                        </Card.Text>
                        <Card.Text>
                        <BsGear/> Manual
                        </Card.Text>
                        <Card.Text>
                        <BsCalendar4/> Tahun 2020
                        </Card.Text>
                        <Button variant="success w-100" className='rounded-1 p-2'>Pilih Mobil</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='mt-4' >
                <Card style={{ width: '24em' }}>
                    <Card.Body className="mt-3">
                        <Card.Img variant="top" src={Imgexample} />
                        <Card.Title className="mt-4">Nama/Tipe Mobil</Card.Title>
                        <h6 className="fw-bold">Rp 430.000/hari</h6>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                        <BsPeople/> 4 Orang
                        </Card.Text>
                        <Card.Text>
                        <BsGear/> Manual
                        </Card.Text>
                        <Card.Text>
                        <BsCalendar4/> Tahun 2020
                        </Card.Text>
                        <Button variant="success w-100" className='rounded-1 p-2'>Pilih Mobil</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>    
    )
}
export default Cardcar