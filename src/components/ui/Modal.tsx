import React, { type PropsWithChildren } from 'react';
import ReactModal, { type Styles } from 'react-modal';

const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#262626',
    border: '1px solid #262626',
    minWidth: '200px',
    maxWidth: '700px',
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(10, 10, 10, 0.7)',
    backdropFilter: 'blur(2px)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#modal-portal');

export type ModalProps = {
  isOpen?: boolean;
  onRequestClose?: () => void;
};

export default function Modal({
  onRequestClose,
  isOpen = false,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  );
}
