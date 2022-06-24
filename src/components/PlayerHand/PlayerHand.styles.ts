import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerGrid = styled(Grid)({
  marginBottom: 36,
});

export const TitleGrid = styled(Grid)({
  gap: 12,
  marginBottom: 20,
});

export const StyledButton = styled(Button)({
  width: 'auto',
  minWidth: 0,
  height: 16,
  padding: 6,
  fontSize: 14,
  color: '#a58d00',
});

export const HandGrid = styled(Grid)({
  gap: 24,
});

export const OverlayDiv = styled('div')({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(55, 63, 71, 0.2)',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SmallButton = styled(Button)({
  padding: 6,
  fontSize: 14,
  height: 24,
});
