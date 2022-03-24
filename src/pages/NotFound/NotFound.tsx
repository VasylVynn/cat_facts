import { useNavigate } from "react-router-dom";

import {
    Wrapper,
    GoBackBTN,
    H2,
} from './styles'

const NotFoundPage = () => {
    const navigate = useNavigate();
    function GoBack() {
        navigate('/');
    }
    return <Wrapper>
        <H2>404 Not Found</H2>
        <GoBackBTN onClick={GoBack} >Return to Home page</GoBackBTN>

    </Wrapper>;
}

export default NotFoundPage;
