import styled, { keyframes } from "styled-components";


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
    border: 8px solid #00ff3b;
    border-radius: 50%;
    border-top-color: white;
    opacity: 0.5;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    width: 32px;
    height: 32px;
    transition: opacity 200ms;
    animation: ${rotate360} 1s linear;
    animation-iteration-count: infinite;
    transition-delay: '200ms' ;
`
