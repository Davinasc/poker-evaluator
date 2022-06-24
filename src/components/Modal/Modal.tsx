import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { CloseIconButton, ContainerGrid } from './Modal.styles';

interface ModalProps extends MuiModalProps {
  onClose: () => void;
}

export default function Modal({ onClose, children, ...props }: ModalProps) {
  return (
    <MuiModal {...props}>
      <ContainerGrid>
        <CloseIconButton onClick={onClose}>
          <CloseIcon />
        </CloseIconButton>

        {children}
      </ContainerGrid>
    </MuiModal>
  );
}
