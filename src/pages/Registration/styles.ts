import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  @media (max-width: 768px){
        width: 90%;
    }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: #ffffff6c;
    &:valid, &:focus {  
      background: #ffffffa2;
      border: 1px solid #fff;
    } 
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #fff;
`;

export const SubmitBTN = styled.button`
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  max-width: 100px;
`;

export const RegistrationTitle = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const ErrorMessage = styled.p`
font-size: 14px;
font-style: italic;
padding: 0;
margin:0;
color: #f44444;
`;