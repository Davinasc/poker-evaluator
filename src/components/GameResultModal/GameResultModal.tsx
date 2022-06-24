import { BaseHand } from '../../services/evaluator';
import Card from '../Card';
import Modal from '../Modal';
import {
  CardsGrid,
  DescriptionTypography,
  PlayerTypography,
  StyledButton,
  TitleTypography,
} from './GameResultModal.styles';

export interface GameResultModalProps {
  open: boolean;
  hand?: BaseHand;
  winner?: string;
  onClose: () => void;
}

export default function GameResultModal({
  open,
  hand,
  winner,
  onClose,
}: GameResultModalProps) {
  const description =
    hand && winner && `${winner} wins with: ${hand.description}`;

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <TitleTypography>Winner</TitleTypography>

        <PlayerTypography>{winner}</PlayerTypography>

        <DescriptionTypography>{description}</DescriptionTypography>

        {hand && (
          <CardsGrid container justifyContent="center">
            {hand.toArray().map(card => (
              <Card key={card} value={card} />
            ))}
          </CardsGrid>
        )}

        <StyledButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={onClose}
        >
          New Game
        </StyledButton>
      </>
    </Modal>
  );
}
