import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import { getCardsBySuitName } from '../../utils/cards';
import type { CardSuitName, CardType } from '../../services/evaluator/types';
import { CardsGrid, TitleTypography } from './SelectCardModal.styles';
import Card from '../Card';
import Modal from '../Modal';
import { CardPlaceholderGrid } from '../Card/Card.styles';

export interface SelectCardModalProps {
  open: boolean;
  hand: CardType[];
  setHand: Dispatch<SetStateAction<CardType[]>>;
  onClose: () => void;
}

const TABS: CardSuitName[] = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

export default function SelectCardModal({
  open,
  hand,
  setHand,
  onClose,
}: SelectCardModalProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const cards = useMemo(() => getCardsBySuitName(activeTab), [activeTab]);

  function isCardBlocked(card: CardType) {
    return !!hand.find(selectedCard => selectedCard === card);
  }

  const onTabChange = (_event: React.SyntheticEvent, tab: CardSuitName) => {
    setActiveTab(tab);
  };

  const selectCard = (card: CardType) => () => {
    setHand([...hand, card]);
    onClose();
  };

  const selectRandomCard = () => {
    const newCard = cards[Math.floor(Math.random() * cards.length)];
    const invalidCard = hand.find(card => card === newCard);

    if (invalidCard) {
      selectRandomCard();
      return;
    }

    setHand([...hand, newCard]);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <TitleTypography>Select a Card</TitleTypography>

        <Tabs variant="scrollable" value={activeTab} onChange={onTabChange}>
          {TABS.map(tab => (
            <Tab key={tab} label={tab} value={tab} />
          ))}
        </Tabs>

        <CardsGrid container>
          <CardPlaceholderGrid onClick={selectRandomCard}>
            <QuestionMarkIcon />
          </CardPlaceholderGrid>

          {cards.map(card => (
            <Card
              key={card}
              value={card}
              onClick={selectCard(card)}
              blocked={isCardBlocked(card)}
            />
          ))}
        </CardsGrid>
      </>
    </Modal>
  );
}
