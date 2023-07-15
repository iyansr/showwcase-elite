import React, { Fragment } from 'react';

import Box from '@showwcase/components/basic/Box';
import Text from '@showwcase/components/basic/Text';

import useQueryGetUserEducation from '../hooks/useQueryGetUserEducation';

const UserEducations = () => {
  const { data } = useQueryGetUserEducation();

  return (
    <Fragment>
      {data?.map((education) => (
        <Box
          bg="darkSecondary"
          p={16}
          py={32}
          borderRadius={8}
          mb={16}
          key={education.added}
          display="flex"
          flexDirection="column"
        >
          <Text fontWeight={600} fontSize={20} mb={3}>
            {education.fieldOfStudy} @ {education.university?.name}
          </Text>

          <Text fontWeight={400} mb={4}>
            {education.startDate as string} -{' '}
            {education.isPresent ? 'Present' : (education.endDate as string)}
          </Text>

          {education.description?.split('\n').map((desc, i) => (
            <Text fontWeight={400} mb={2} key={i}>
              {desc}
            </Text>
          ))}
        </Box>
      ))}
    </Fragment>
  );
};

export default UserEducations;
