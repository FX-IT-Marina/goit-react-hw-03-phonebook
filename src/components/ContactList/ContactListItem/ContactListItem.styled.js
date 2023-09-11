import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContactName = styled.p`
  color: rgb(37, 37, 37);
  font-size: 20px;
  font-weight: 600;
`;
export const Button = styled.button`
  border-radius: 50px;
  font-size: 19px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  color: rgb(21, 21, 21);
  font-weight: 600;

  &:hover {
    background-color: rgb(17, 17, 17);
    color: white;
  }
`;
