import React from 'react';

import {
  useFavoritesStore,
  FAVORITES_INITIAL_STATE,
} from '../../store/useFavoritesStore';
import { Input, Modal, Select } from '../shared';
import { GenderProps, PeopleProps } from '../../services';

interface EditModalProps {
  height: string;
  gender: GenderProps;
  editingCharacter: PeopleProps;
  setHeight: (value: string) => void;
  setGender: (value: GenderProps) => void;
  setEditingCharacter: (character: PeopleProps) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  height,
  gender,
  setHeight,
  setGender,
  editingCharacter,
  setEditingCharacter,
}) => {
  const setFavorite = useFavoritesStore((state) => state.setFavorite);

  const handleSaveChanges = () => {
    if (editingCharacter) {
      const updatedCharacter = {
        ...editingCharacter,
        height,
        gender: gender as GenderProps,
      };
      setFavorite(updatedCharacter);
      handleClose();
    }
  };

  const handleClose = () => {
    setEditingCharacter(FAVORITES_INITIAL_STATE.selectedCharacter);
  };

  return (
    <Modal
      onClose={handleClose}
      onConfirm={handleSaveChanges}
      isOpen={!!editingCharacter?.name}
      title={`Edit ${editingCharacter?.name}`}
    >
      <div className='space-y-4'>
        <Input
          id='height'
          type='number'
          label='Height'
          value={height}
          aria-label='Character Height'
          placeholder='Enter character height'
          onChange={(e: { target: { value: string } }) =>
            setHeight(e.target.value)
          }
        />

        <Select
          id='gender'
          label='Gender'
          value={gender}
          placeholder='Select gender'
          aria-label='Character Gender'
          onChange={(e: { target: { value: string } }) =>
            setGender(e.target.value as GenderProps)
          }
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'n/a', label: 'N/A' },
          ]}
        />
      </div>
    </Modal>
  );
};

export default EditModal;
