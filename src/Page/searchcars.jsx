import { Navbars, Hero1, Footer, Searchcars } from '../components';
import { Helmet } from 'react-helmet';
const Searchcar = () => {
    return (
        <div>
            <Helmet>
                <title>BCR | Search Car</title>
            </Helmet>
            <div className='body'>
                <Navbars />
                <Hero1 />
            </div>
            <div className='body2'>
                <Searchcars />
                <Footer />
            </div>
        </div>
    )
}
export default Searchcar