import React from 'react';
import { ModalWrapper } from './Modal.style';

interface IModalProps {
  children: React.ReactNode;
  cancelAction: () => void;
  mainAction: () => void;
  className?: string;
}

export const Modal: React.FC<IModalProps> =({
  children,
  cancelAction,
  mainAction,
  className = ''
}) => {
  return (
    <ModalWrapper className={className}>
      <div className='w-100 d-flex'>{ children }</div>
      <div className='w-100 d-flex'>
        // TODO: Add buttons
      </div>
    </ModalWrapper>
  );
};

export default Modal;