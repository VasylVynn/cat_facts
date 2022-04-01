import { useNavigate } from "react-router-dom";

import catNotFound from '../../images/404image.png'
import {
    GoBackBTN,
    ImageContainer,
    Image,
} from './styles'

const NotFoundPage = () => {
    const navigate = useNavigate();
    function GoBack() {
        navigate('/');
    }
    return <ImageContainer>
        <Image src={catNotFound} alt="404 Cat Not found image" ></Image>
        <GoBackBTN onClick={GoBack} >Return to Home page</GoBackBTN>

    </ImageContainer>;
}

export default NotFoundPage;
