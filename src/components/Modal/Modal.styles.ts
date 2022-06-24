import { Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mainContainerMixin } from '../../theme/mixins';

export const ContainerGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  ...mainContainerMixin,
  position: 'relative',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,

  [breakpoints.up('md')]: {
    height: 'auto',
    top: 40,
  },
}));

export const CloseIconButton = styled(IconButton)({
  position: 'absolute',
  top: 12,
  right: 12,
});
