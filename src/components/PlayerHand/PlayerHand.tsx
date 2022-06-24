import { Dispatch, SetStateAction, useState } from 'react';
// material ui
import { Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
// utils
import Hand from '../../services/evaluator/hands/hand/hand';
// types
import type { CardType } from '../../services/evaluator/types';
// custom components
import Card from '../Card';
// styled components
import {
  ContainerGrid,
  HandGrid,
  StyledButton,
  TitleGrid,
} from './PlayerHand.styles';
import { CardPlaceholderGrid } from '../Card/Card.styles';
import SelectCardModal from '../SelectCardModal';

export interface PlayerHandProps {
  title: string;
  hand: CardType[];
  setHand: Dispatch<SetStateAction<CardType[]>>;
}

export default function PlayerHand({ title, hand, setHand }: PlayerHandProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardType>();

  function isSelected(card: CardType) {
    return selectedCard === card;
  }

  const toggleModal = () => setModalOpen(open => !open);

  const toggleCardSelection = (card: CardType) => () => {
    setSelectedCard(isSelected(card) ? undefined : card);
  };

  const selectRandomHand = () => setHand(Hand.random());

  const removeCard = (card: CardType) => () => {
    const updatedHand = [...hand];
    const cardIdx = hand.findIndex(handCard => handCard === card);

    updatedHand.splice(cardIdx, 1);

    setHand(updatedHand);
    setSelectedCard(undefined);
  };

  return (
    <ContainerGrid>
      <TitleGrid wrap="nowrap">
        <Typography variant="h5" component="span">
          {title}
        </Typography>

        <StyledButton onClick={selectRandomHand}>Random Hand</StyledButton>
      </TitleGrid>

      <HandGrid container>
        {hand.map(card => (
          <Card
            key={card}
            value={card}
            // selected={selectedCard === card}
            onClick={toggleCardSelection(card)}
            onRemove={removeCard(card)}
          />
        ))}

        {hand.length < 5 ? (
          <CardPlaceholderGrid onClick={toggleModal}>
            <AddIcon />
          </CardPlaceholderGrid>
        ) : null}
      </HandGrid>

      <SelectCardModal
        open={modalOpen}
        hand={hand}
        setHand={setHand}
        onClose={toggleModal}
      />
    </ContainerGrid>
  );
}
