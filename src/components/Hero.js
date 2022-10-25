import { Container, Button } from "react-bootstrap"
import Heroimage from "../assets/img/img_car.png"
const Hero = ()=>{
    return(
        <div>
            <Container>
            <div className="" fluid>
                <div className="row">
                    <div className="col-md-6 ">
                        <h1 className="ms-2 mt-5">Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                        <p className="ms-2">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br /> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
                        <Button variant="outline-success">Register</Button>
                    </div>
                    <div className="col-md">
                        <img className="img-fluid ms-5" src={Heroimage} alt='Heroimage' />
                    </div>
                </div>
            </div>
        </Container>
        </div>
    )
}
export default Hero