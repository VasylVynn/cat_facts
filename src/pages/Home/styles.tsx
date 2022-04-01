import styled from 'styled-components';

export { ImageContainer, FactContainer, Image, FactContext }

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 1rem;
    @media (max-width: 768px){
        margin: 5rem 1rem; 
    }
`;

const Image = styled.img`
    display: flex;
    align-self: center;
    max-width: 750px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media (max-width: 768px){
        width: 90%;
    }
`;

const FactContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 1rem;
`;

const FactContext = styled.div`
    max-width: 750px;
    text-align: center;
`;
