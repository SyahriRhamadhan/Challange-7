import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import {BsPeople, BsGear, BsCalendar4} from 'react-icons/bs';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCars} from '../store/actions/carsActions'


const Searchcars =()=>{
    const dispatch = useDispatch()
    const carsListData = useSelector(state => state.carsList)
    const {loading, error, cars} = carsListData
    useEffect(() => {
        dispatch(getCars()) 
      }, [dispatch])
    return(
        <Container className=' SearchCar p-5 position-relative'>
            <Card>
                <Row className='py-4 px-5 position-relative'>
                    <Col lg>
                        <Form>
                            <Form.Label>Tipe driver</Form.Label>
                            <Form.Select>
                            <option default>Dengan Sopir</option>
                            <option value='1'>Tanpa Sopir(Lepas Kunci)</option>
                            </Form.Select>
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Tanggal</Form.Label> <br/>
                            <Form.Control type='date' placeholder='Jumlah Penumpang' />
                            {/* <DatePicker onChange={onChange} className='w-100'/> */}
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Waktu Jemput/Antar</Form.Label>
                            <Form.Select>
                            <option value='00:00:00'>Pilih waktu</option>
                            <option value='08:00:00'>08.00 WIB</option>
                            <option value='09:00:00'>09.00 WIB</option>
                            <option value='10:00:00'>10.00 WIB</option>
                            <option value='11:00:00'>11.00 WIB</option>
                            <option value='12:00:00'>12.00 WIB</option>
                            </Form.Select>
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Jumlah Penumpang(optional)</Form.Label>
                            <Form.Control type='number' placeholder='Jumlah Penumpang' />
                        </Form>
                    </Col>
                    <Col lg={2} className=' text-center m-auto p-auto' ><br/>
                        <Button variant='success' className='w-100 mt-2'>Search</Button>
                    </Col>
                </Row>
            </Card>
            <Row className='m-auto'>
            {loading ? 'Loading...' : error ? error.message :
            cars.map((post, index) => (
                    <Col md={4} className='mt-4' >
                    <Card style={{ width: '24em', height: '40em'}} >
                        <Card.Body>
                            <Card.Img variant='top' src={post.image} style={{ height: '16em' }} className=' rounded-4' alt={post.model}/>
                            <Card.Title className='mt-4'><h6>{post.manufacture}/{post.model}</h6></Card.Title>
                            <h6 className='fw-bold'>Rp {post.rentPerDay.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}/hari</h6>
                            <Card.Text>
                            {post.description}
                            </Card.Text>
                            <Card.Text>
                            <BsPeople/>  {post.capacity} Orang
                            </Card.Text>
                            <Card.Text>
                            <BsGear/>  {post.transmission}
                            </Card.Text>
                            <Card.Text>
                            <BsCalendar4/>  Tahun {post.year}
                            </Card.Text>
                            <Button variant='success' className='rounded-1 p-2 mb-3 position-absolute bottom-0 start-50 translate-middle-x' style={{ width: '22em' }}>Pilih Mobil</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                )) }
            </Row>
        </Container>
    )
}
export default Searchcars