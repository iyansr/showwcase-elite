import React from 'react';

import Box from '@showwcase/components/basic/Box';
import Button from '@showwcase/components/basic/Button';
import Text from '@showwcase/components/basic/Text';

type Props = {
  name: string;
};

const Header = ({ name }: Props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={32}>
      <Text fontSize={32} fontWeight={700} textAlign="center" color="lightPrimary">
        Welcome to {name}&apos;s education page.
      </Text>

      <Box mt={32}>
        <Button bg="primaryPrimary" px={32} py={16} borderRadius={8}>
          Add new education
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
