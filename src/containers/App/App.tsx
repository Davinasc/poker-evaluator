import { useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import Hand from '@app/services/evaluator/hands/hand/hand';
import Hand from '../../services/evaluator/hands/hand/hand';
import { theme } from '../../theme';
import PlayerHand from '../../components/PlayerHand';
import GameResultModal from '../../components/GameResultModal';
import type { CardType } from '../../services/evaluator/types';
import {
  ContainerGrid,
  StyledLoadingButton,
  TitleTypography,
} from './App.styles';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type Winner = 'Player 1' | 'Player 2' | '';
type Result = { winner: Winner; hand: Hand | undefined };

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  // players states
  const [hand1, setHand1] = useState<CardType[]>([]);
  const [hand2, setHand2] = useState<CardType[]>([]);
  // game states
  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState<Result>();

  const readyToPlay = useMemo(
    () => hand1.length === 5 && hand2.length === 5,
    [hand1, hand2]
  );

  const toggleModal = () => setModalOpen(open => !open);

  const newGame = () => {
    setHand1([]);
    setHand2([]);
    setResult(undefined);
  };

  const onClose = () => {
    newGame();
    toggleModal();
  };

  const play = async () => {
    setPlaying(true);

    const hand1Result = Hand.solve(hand1);
    const hand2Result = Hand.solve(hand2);
    const hand = Hand.winners([hand1Result, hand2Result])[0];
    const winner = hand === hand1Result ? 'Player 1' : 'Player 2';

    await sleep(1200);
    setPlaying(false);

    setResult({ winner, hand });
    toggleModal();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <>
          <ContainerGrid>
            <TitleTypography>Poker Evaluator</TitleTypography>

            <PlayerHand title="Player 1" hand={hand1} setHand={setHand1} />
            <PlayerHand title="Player 2" hand={hand2} setHand={setHand2} />

            <StyledLoadingButton
              fullWidth
              variant="contained"
              color="primary"
              disabled={!readyToPlay}
              loading={playing}
              onClick={play}
            >
              Play
            </StyledLoadingButton>
          </ContainerGrid>

          <GameResultModal
            open={modalOpen}
            hand={result?.hand}
            winner={result?.winner}
            onClose={onClose}
          />
        </>
      </CssBaseline>
    </ThemeProvider>
  );
}
