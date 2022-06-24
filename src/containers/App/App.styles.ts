import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { mainContainerMixin } from '../../theme/mixins';
import LoadingButton from '../../components/LoadingButton';

export const ContainerGrid = styled(Grid)({
  ...mainContainerMixin,
});

export const TitleTypography = styled(Typography)(
  ({ theme: { typography } }) => ({
    ...typography.h5,
    textAlign: 'center',
    marginBottom: 32,
  })
);

export const StyledLoadingButton = styled(LoadingButton)({
  maxWidth: 320,
  margin: '24px auto 0 auto',
});
