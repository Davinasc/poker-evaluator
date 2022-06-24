import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TitleTypography = styled(Typography)(
  ({ theme: { typography } }) => ({
    ...typography.h3,
    textAlign: 'center',
    marginBottom: 32,
  })
);

export const PlayerTypography = styled(Typography)(
  ({ theme: { typography } }) => ({
    ...typography.h5,
    textAlign: 'center',
    marginBottom: 24,
  })
);

export const DescriptionTypography = styled(Typography)({
  textAlign: 'center',
  marginBottom: 24,
});

export const CardsGrid = styled(Grid)({
  gap: 16,
  marginBottom: 64,
});

export const StyledButton = styled(Button)({
  maxWidth: 320,
  margin: '24px auto 0 auto',
});
