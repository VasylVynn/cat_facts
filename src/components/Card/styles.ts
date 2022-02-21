import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 15px;
    margin: 20px 30px;

    @media screen and (min-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(250px,250px));
    }
  `;


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    min-width: 70px;
    box-shadow: rgba(27, 31, 35, .1) 0 3px 0;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
`;
export const CardText = styled.div`
    text-align: center;
    font-family: sans-serif;
  `;



export const FavButton  = styled.button`
    
    background: linear-gradient(to bottom right, #71ef47, #30b34a);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  max-width: 150px;
  outline: transparent;
  padding: 0 1rem;
  margin: 10px auto;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;

  &:disabled{
    opacity: 0.3;
    cursor:default;
    pointer-events: none;
  }
  
 


&:hover {
    box-shadow: 0px 5px 10px 6px rgba(14,115,11,0.38);}
  
 



`;

