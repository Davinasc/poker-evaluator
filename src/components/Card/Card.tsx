import { LazyLoadImage } from 'react-lazy-load-image-component';
// material ui
import { Block as BlockIcon, Close as CloseIcon } from '@mui/icons-material';
// utils
import { getCardImgPath } from '../../utils/cards';
import type { CardType } from '../../services/evaluator/types';
// styled components
import { ContainerDiv, OverlayDiv, StyledIconButton } from './Card.styles';

export interface CardProps {
  value: CardType;
  blocked?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export default function Card({
  value,
  blocked = false,
  onClick,
  onRemove,
}: CardProps) {
  return (
    <ContainerDiv onClick={!blocked ? onClick : undefined}>
      <LazyLoadImage
        src={getCardImgPath(value)}
        alt={value}
        height="100%"
        width="100%"
      />

      {!!onRemove && (
        <StyledIconButton onClick={onRemove}>
          <CloseIcon />
        </StyledIconButton>
      )}

      {blocked && (
        <OverlayDiv>
          <BlockIcon style={{ width: 40, height: 40 }} />
        </OverlayDiv>
      )}
    </ContainerDiv>
  );
}
