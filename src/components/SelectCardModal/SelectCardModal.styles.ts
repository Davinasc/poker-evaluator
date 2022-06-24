import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TitleTypography = styled(Typography)(
  ({ theme: { typography } }) => ({
    ...typography.h5,
    textAlign: 'center',
    marginBottom: 32,
  })
);

export const CardsGrid = styled(Grid)({
  marginTop: 32,
  gap: 16,
});
