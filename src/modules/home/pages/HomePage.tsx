'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { styled } from 'styled-components';

import { useRouter } from 'next/navigation';

import Box from '@showwcase/components/basic/Box';
import Button from '@showwcase/components/basic/Button';

const HomePage = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!name) {
      router.push(`/main`);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Title>Hi there, Welcome to your education showcase</Title>

      <form onSubmit={handleSubmit}>
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Input placeholder="Enter your name" value={name} onChange={handleChangeName} />
          <Box mt={32}>
            <Button disabled={!name} bg="primaryPrimary" px={32} py={16} borderRadius={8}>
              Enter
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.lightPrimary};
  font-weight: 700;
  text-align: center;
`;

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

export default HomePage;
