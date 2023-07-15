'use client';
import React from 'react';

import Box from '@showwcase/components/basic/Box';

import Header from '../components/Header';
import ShowwcaseUniversity from '../components/ShowwcaseUniversity';
import UserEducations from '../components/UserEducations';
import useQueryGetName from '../hooks/useQueryGetName';

const MainPage = () => {
  const { data: name, isLoading } = useQueryGetName();

  if (isLoading || !name) return null;

  return (
    <Box py={64}>
      <Header name={name} />
      <Box gridTemplateColumns={['1fr', '1fr', '1fr 2fr']} display="grid">
        <Box px={[0, 16]} py={16} order={[2, 2, 1]}>
          <ShowwcaseUniversity />
        </Box>
        <Box px={[0, 16]} py={16} order={[1, 1, 2]}>
          <UserEducations />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
