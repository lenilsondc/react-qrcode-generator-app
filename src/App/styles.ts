import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 512px;

  margin: 0 auto;

  margin: 50px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 32px;
`;

export const Field = styled.div`
  flex: 1;
  flex-grow: 0;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
`;

export const Button = styled.button`
  width: 260px;
  height: 56px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.primaryTint};
  }
`;
