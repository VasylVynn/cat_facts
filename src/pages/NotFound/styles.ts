import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1rem;
`;

export const Image = styled.img`
    display: flex;
    align-self: center;
    max-width: 750px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media (max-width: 768px){
        width: 90%;
    }
`;

export const GoBackBTN = styled.button `
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  max-width: 150px;
`;
