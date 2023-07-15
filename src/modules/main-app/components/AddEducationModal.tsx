import React, { type ChangeEvent, useState } from 'react';

import Box from '@showwcase/components/basic/Box';
import Button from '@showwcase/components/basic/Button';
import Input, { TextArea } from '@showwcase/components/basic/Input';
import Text from '@showwcase/components/basic/Text';
import Modal, { type ModalProps } from '@showwcase/components/ui/Modal';
import useDebounce from '@showwcase/modules/shared/hooks/useDebounce';
import { type University } from '@showwcase/modules/shared/types';

import useQuerySearchUniversity from '../hooks/useQuerySearchUniversity';

type Props = {
  onSave?: () => void;
} & ModalProps;

type Form = {
  university: University | null;
  startDate: string | Date;
  endDate: string | Date;
  description: string;
  isPresent: boolean;
};

const AddEducationModal = ({ isOpen, onRequestClose, onSave }: Props) => {
  const [searchValue, setSearchvalue] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const [formValue, setFormValue] = useState<Form>({
    university: null,
    startDate: '',
    endDate: '',
    description: '',
    isPresent: false,
  });

  const debounceValue = useDebounce(searchValue, 500);

  const { data: universities } = useQuerySearchUniversity(debounceValue);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(e.target.value);
  };

  const handleSelectUniv = (university: University) => {
    setFormValue({ ...formValue, university });
    setShowSearch(false);
  };

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(formValue);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Box width="100%">
        <Text fontWeight={600} fontSize={18}>
          Add New Education
        </Text>

        <Box display="flex" flexDirection="column" mt={4} width="100%">
          <Text fontWeight={600} fontSize={14} mb={2}>
            University Name
          </Text>
          <Box
            mt={3}
            bg="darkPrimary"
            p={3}
            borderRadius={8}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowSearch(true)}
          >
            <Text opacity={!formValue.university ? 0.5 : 1}>
              {!formValue.university ? ' Select University' : formValue.university.name}
            </Text>
          </Box>

          {showSearch && (
            <Box mt={3} bg="darkPrimary" p={3} borderRadius={8} maxHeight={200} overflowY="auto">
              <Input
                placeholder="Search University"
                style={{ width: '100%', maxWidth: '600px' }}
                value={searchValue}
                onChange={handleChangeSearch}
              />
              <Box height={12} />
              {universities?.map((university, index) => (
                <Box
                  p={2}
                  style={{ cursor: 'pointer' }}
                  key={index}
                  onClick={() => handleSelectUniv(university)}
                >
                  <Text>{university.name}</Text>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box display="flex" flexDirection="row" mt={4} width="100%" maxWidth="660px">
          <Box flex={1} display="flex" flexDirection="column">
            <Text fontWeight={600} fontSize={14} mb={2}>
              Start Date
            </Text>
            <Input
              placeholder="School Name"
              type="date"
              name="startDate"
              value={formValue.startDate as string}
              onChange={handleChangeForm}
              style={{ width: '100%', maxWidth: '660px' }}
            />
          </Box>
          <Box flex={1} pl={5} display="flex" flexDirection="column">
            <Text fontWeight={600} fontSize={14} mb={2}>
              End Date
            </Text>
            <Input
              disabled={formValue.isPresent}
              type="date"
              name="endDate"
              value={formValue.endDate as string}
              onChange={handleChangeForm}
              placeholder="School Name"
              style={{ width: '100%', maxWidth: '660px' }}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" mt={2}>
          <Text fontWeight={600} fontSize={14}>
            Present
          </Text>
          <input
            type="checkbox"
            name="isPresent"
            onChange={(e) =>
              setFormValue({
                ...formValue,
                isPresent: e.target.checked,
                ...(e.target.checked ? { endDate: '' } : {}),
              })
            }
          />
        </Box>

        <Box display="flex" flexDirection="column" mt={4} width="100%">
          <Text fontWeight={600} fontSize={14} mb={2}>
            Description
          </Text>
          <TextArea
            placeholder="Description"
            onChange={handleChangeForm}
            name="description"
            value={formValue.description}
            cols={30}
            rows={10}
            style={{ width: '100%', maxWidth: '660px' }}
          />
        </Box>

        <Box mt={32} display="flex" justifyContent="flex-end">
          <Button bg="primaryPrimary" px={32} py={16} borderRadius={8} onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEducationModal;
