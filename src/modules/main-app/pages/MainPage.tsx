import React from 'react';

import Box from '@showwcase/components/basic/Box';
import Text from '@showwcase/components/basic/Text';

const MainPage = () => {
  return (
    <Box gridTemplateColumns={['1fr', '1fr', '2fr 3fr']} display="grid">
      <Box px={[0, 16]} py={16} order={[2, 2, 1]}>
        <Box bg="darkSecondary" px={16} py={32} borderRadius={8} minHeight={'32rem'}>
          <Text fontWeight={600}>Showwcase University</Text>
        </Box>
      </Box>
      <Box px={[0, 16]} py={16} order={[1, 1, 2]}>
        <Box bg="darkSecondary" p={16} py={32} borderRadius={8} minHeight={'32rem'}>
          <Text fontWeight={600}>Showwcase Universitybbb</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
