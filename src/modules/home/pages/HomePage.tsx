'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { styled } from 'styled-components';

import { useRouter } from 'next/navigation';

import Box from '@showwcase/components/basic/Box';
import Button from '@showwcase/components/basic/Button';
import Input from '@showwcase/components/basic/Input';
import Text from '@showwcase/components/basic/Text';

import useMutateSaveName from '../hooks/useMutateSaveName';

const HomePage = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutateSaveName();
  const disabled = !name || isLoading;

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!!name) {
      await mutateAsync({ name });
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
      <Text fontSize={32} fontWeight={700} textAlign="center" color="lightPrimary">
        Hi there, Welcome to your education showcase
      </Text>

      <form onSubmit={handleSubmit}>
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Input
            placeholder="Enter your name"
            disabled={isLoading}
            value={name}
            onChange={handleChangeName}
          />
          <Box mt={32}>
            <Button disabled={disabled} bg="primaryPrimary" px={32} py={16} borderRadius={8}>
              Enter
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default HomePage;
