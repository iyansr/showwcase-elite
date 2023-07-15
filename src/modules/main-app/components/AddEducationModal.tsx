import React from 'react';

import Box from '@showwcase/components/basic/Box';
import Button from '@showwcase/components/basic/Button';
import Input, { TextArea } from '@showwcase/components/basic/Input';
import Text from '@showwcase/components/basic/Text';
import Modal, { type ModalProps } from '@showwcase/components/ui/Modal';

type Props = {
  onSave?: () => void;
} & ModalProps;

const AddEducationModal = ({ isOpen, onRequestClose, onSave }: Props) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Box width="100%">
        <Text fontWeight={600} fontSize={18}>
          Add New Education
        </Text>

        <Box display="flex" flexDirection="column" mt={4} width="100%">
          <Text fontWeight={600} fontSize={14} mb={2}>
            School Name
          </Text>
          <Input placeholder="School Name" style={{ width: '100%', maxWidth: '660px' }} />
        </Box>

        <Box display="flex" flexDirection="row" mt={4} width="100%" maxWidth="660px">
          <Box flex={1} display="flex" flexDirection="column">
            <Text fontWeight={600} fontSize={14} mb={2}>
              Start Date
            </Text>
            <Input
              placeholder="School Name"
              type="date"
              style={{ width: '100%', maxWidth: '660px' }}
            />
          </Box>
          <Box flex={1} pl={5} display="flex" flexDirection="column">
            <Text fontWeight={600} fontSize={14} mb={2}>
              End Date
            </Text>
            <Input
              type="date"
              placeholder="School Name"
              style={{ width: '100%', maxWidth: '660px' }}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" mt={2}>
          <Text fontWeight={600} fontSize={14}>
            Present
          </Text>
          <input type="checkbox" />
        </Box>

        <Box display="flex" flexDirection="column" mt={4} width="100%">
          <Text fontWeight={600} fontSize={14} mb={2}>
            Description
          </Text>
          {/* <Input placeholder="School Name" style={{ width: '100%', maxWidth: '660px' }} /> */}
          <TextArea
            name="Description"
            cols={30}
            rows={10}
            style={{ width: '100%', maxWidth: '660px' }}
          />
        </Box>

        <Box mt={32} display="flex" justifyContent="flex-end">
          <Button bg="primaryPrimary" px={32} py={16} borderRadius={8} onClick={onSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEducationModal;
