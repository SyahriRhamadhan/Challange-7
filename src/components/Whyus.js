import { Container, Card } from "react-bootstrap"
import Card1 from "../assets/img/icon_complete.png"
import Card2 from "../assets/img/icon_price.png"
import Card3 from "../assets/img/icon_24hrs.png"
import Card4 from "../assets/img/icon_professional.png"

const Whyus =()=>{
    return(
        <Container >
            <div className="row col-md py-5">
                <h3 className="fw-bold">Why Us?</h3>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className='p-2'>
                        <Card.Img className="ms-3 mt-3" variant="top" style={{width:'32px', height:'32px'}} src={Card1} />
                        <Card.Body>
                            <Card.Title>Mobil Lengkap</Card.Title>
                            <Card.Text>
                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className='p-2'>
                        <Card.Img className="ms-3 mt-3" variant="top" style={{width:'32px', height:'32px'}} src={Card2} />
                        <Card.Body>
                            <Card.Title>Harga Murah</Card.Title>
                            <Card.Text>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className='p-2'>
                        <Card.Img className="ms-3 mt-3" variant="top" style={{width:'32px', height:'32px'}} src={Card3} />
                        <Card.Body>
                            <Card.Title>Harga Murah</Card.Title>
                            <Card.Text>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className='p-2'>
                        <Card.Img className="ms-3 mt-3" variant="top" style={{width:'32px', height:'32px'}} src={Card4} />
                        <Card.Body>
                            <Card.Title>Harga Murah</Card.Title>
                            <Card.Text>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}
export default Whyus