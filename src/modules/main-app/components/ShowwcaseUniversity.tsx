import React from 'react';

import Link from 'next/link';

import Box from '@showwcase/components/basic/Box';
import Text from '@showwcase/components/basic/Text';

import useQueryGetUserEducation from '../hooks/useQueryGetUserEducation';

const ShowwcaseUniversity = () => {
  const { data } = useQueryGetUserEducation();

  const uniqueEducation = [...new Map(data?.map((item) => [item.university?.name, item])).values()];

  return (
    <Box
      bg="darkSecondary"
      px={16}
      py={32}
      borderRadius={8}
      minHeight={'32rem'}
      display="flex"
      flexDirection="column"
    >
      <Text fontWeight={600} fontSize={20} mb={3}>
        Showwcase University
      </Text>

      {uniqueEducation?.map((edu) => (
        <Box key={edu.university?.name} mb={2}>
          <Link
            href={edu?.university?.web_pages[0] as string}
            target="_blank"
            style={{ textDecorationLine: 'none', color: '#fff' }}
          >
            <Text fontWeight={500} fontSize={18}>
              {edu.university?.name} - {edu.university?.country}
            </Text>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ShowwcaseUniversity;
