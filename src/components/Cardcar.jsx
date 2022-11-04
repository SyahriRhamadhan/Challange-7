// import { Card, Button, Row, Col } from 'react-bootstrap'
// import {BsPeople, BsGear, BsCalendar4} from 'react-icons/bs';
// import React, {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {getCars} from '../store/actions/userActions'
// const Cardcar =()=>{
//     const dispatch = useDispatch()
//     const carsListData = useSelector(state => state.carsList)
//     const {loading, error, cars} = carsListData
//     useEffect(() => {
//         dispatch(getCars()) 
//       }, [dispatch])
//     return(
//         <div>
//             <Row className='m-auto'>
//             {loading ? 'Loading...' : error ? error.message :
//             cars.map((post, index) => (
//                     <Col md={4} className='mt-4' >
//                     <Card style={{ width: '24em', height: '40em'}} >
//                         <Card.Body>
//                             <Card.Img variant='top' src={post.image} style={{ height: '16em' }} className=' rounded-4' alt={post.model}/>
//                             <Card.Title className='mt-4'><h6>{post.manufacture}/{post.model}</h6></Card.Title>
//                             <h6 className='fw-bold'>Rp {post.rentPerDay.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')}/hari</h6>
//                             <Card.Text>
//                             {post.description}
//                             </Card.Text>
//                             <Card.Text>
//                             <BsPeople/>  {post.capacity} Orang
//                             </Card.Text>
//                             <Card.Text>
//                             <BsGear/>  {post.transmission}
//                             </Card.Text>
//                             <Card.Text>
//                             <BsCalendar4/>  Tahun {post.year}
//                             </Card.Text>
//                             <Button variant='success' className='rounded-1 p-2 mb-3 position-absolute bottom-0 start-50 translate-middle-x' style={{ width: '22em' }}>Pilih Mobil</Button>
//                         </Card.Body>
//                     </Card>
//                     </Col>
//                 )) }
//             </Row>
//         </div>    
//     )
// }
// export default Cardcar