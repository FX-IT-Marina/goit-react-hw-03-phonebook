import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px 35px;
  border-radius: 30px;
  border: 2px solid grey;
  background-color: rgb(156, 149, 149);
  color: rgb(37, 37, 37);
  font-size: 25px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.768), 0 16px 20px rgba(39, 37, 37, 0.2);
`;

export const Input = styled.input`
  border-radius: 24px;
  padding: 4px 10px;
  font-size: 20px;
`;
