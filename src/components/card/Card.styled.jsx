import { styled } from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 335px; /* Updated width */
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

export const StartStopButton = styled(Button)`
  width: 4.2rem;
`;

export const IconButton = styled(Button)`
  background-color: #555;

  &:hover {
    background-color: #777;
  }
`;
