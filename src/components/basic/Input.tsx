import { styled } from 'styled-components';

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.darkSecondary};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightPrimary};
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  outline: none;
  max-width: 500px;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;

export default Input;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.darkSecondary};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightPrimary};
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  outline: none;
  max-width: 500px;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;
