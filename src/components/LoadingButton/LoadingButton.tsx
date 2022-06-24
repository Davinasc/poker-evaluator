import { Button, ButtonProps, CircularProgress } from '@mui/material';

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export default function LoadingButton({
  disabled,
  loading,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading ? (
        <CircularProgress disableShrink size={20} variant="indeterminate" />
      ) : (
        children
      )}
    </Button>
  );
}
