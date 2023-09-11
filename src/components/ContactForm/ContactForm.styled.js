import styled from 'styled-components';
import { Form } from 'formik';
import { Field } from 'formik';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px 35px;
  border-radius: 30px;
  border: 2px solid grey;
  background-color: rgb(156, 149, 149);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.768), 0 16px 20px rgba(39, 37, 37, 0.2);
`;

export const Input = styled(Field)`
  border-radius: 24px;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Error = styled.p`
  color: red;
  position: absolute;
  font-size: 14px;
  top: -30px;
  left: 120px;
`;

export const Button = styled.button`
  border-radius: 50px;
  font-size: 19px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 150px;
  cursor: pointer;
  color: rgb(37, 37, 37);
  font-weight: 600;

  &:hover {
    background-color: rgb(17, 17, 17);
    color: white;
  }
`;

export const Label = styled.label`
  font-size: 25px;
  color: rgb(37, 37, 37);
  font-weight: 600;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  position: relative;
`;
