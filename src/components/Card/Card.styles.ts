import { Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerDiv = styled('div')({
  position: 'relative',
  width: 92,
  height: 133,
});

export const OverlayDiv = styled('div')({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  background: '#ffffff99',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CardPlaceholderGrid = styled(Grid)({
  width: 92,
  height: 133,
  background: '#EAECEE',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: -12,
  right: -12,

  width: 20,
  height: 20,
  padding: 12,

  backgroundColor: '#FFFFFF',
  border: '1px solid',
  borderRadius: 32,
  borderColor: '#EAECEE',
  color: '#0C1116',

  '&:hover': { backgroundColor: '#FAFAFA' },
  '&:focus': { borderColor: '#0C1116' },
  '&:disabled': {
    backgroundColor: '#FAFAFA',
    border: 'none',

    '& .MuiSvgIcon-root': { color: '#D6DADE' },
  },

  '& .MuiSvgIcon-root': {
    width: 14,
    height: 14,
    color: '#0C1116',
  },
});
