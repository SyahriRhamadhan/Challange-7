import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import Cardcar from "./Cardcar"
// import 'antd/dist/antd.css';
// import { DatePickerProps } from 'antd';
// import { DatePicker} from 'antd';
// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//     console.log(date, dateString);
//   };
const Searchcars =()=>{
    return(
        <Container className=" SearchCar p-5 position-relative ">
            <Card>
                <Row className="py-4 px-5">
                    <Col lg>
                        <Form>
                            <Form.Label>Tipe driver</Form.Label>
                            <Form.Select>
                            <option default>Dengan Sopir</option>
                            <option value="1">Tanpa Sopir(Lepas Kunci)</option>
                            </Form.Select>
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Tanggal</Form.Label> <br/>
                            <Form.Control type="date" placeholder="Jumlah Penumpang" />
                            {/* <DatePicker onChange={onChange} className='w-100'/> */}
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Waktu Jemput/Antar</Form.Label>
                            <Form.Select>
                            <option value="00:00:00">Waktu Jemput</option>
                            <option value="08:00:00">08.00 WIB</option>
                            <option value="09:00:00">09.00 WIB</option>
                            <option value="10:00:00">10.00 WIB</option>
                            <option value="11:00:00">11.00 WIB</option>
                            <option value="12:00:00">12.00 WIB</option>
                            </Form.Select>
                        </Form>
                    </Col>
                    <Col lg>
                        <Form>
                            <Form.Label>Jumlah Penumpang(optional)</Form.Label>
                            <Form.Control type="number" placeholder="Jumlah Penumpang" />
                        </Form>
                    </Col>
                    <Col lg={2} className=' text-center m-auto p-auto' ><br/>
                        <Button variant='success' className="w-100 mt-2">Search</Button>
                    </Col>
                </Row>
            </Card>
            <Cardcar/>
        </Container>
    )
}
export default Searchcars