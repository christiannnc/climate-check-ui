import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { DataItem } from '../../types';
import { ContentType } from '../../enums';
import Card from '../../components/Card';
import styles from './index.module.css';
import ActionButton from '../../components/ActionButton';
import data from '../../data/data.json';
import { capitalizeFirstLetters, getRandomArrayIndex } from '../../utils';
import ButtonGroup from '../../components/ButtonGroup';
import { GifResult, GiphyFetch } from '@giphy/js-fetch-api';
import { Gif } from '@giphy/react-components';
import { GIF_IDS } from '../../constants';
import poweredByGiphyAttribution from '../../assets/powered_by_giphy_attribution.gif';

const HomePage: FC = () => {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<ContentType | null>(
    null
  );
  const [gif, setGif] = useState<GifResult['data'] | null>();

  // don't panic! https://www.npmjs.com/package/@giphy/react-components
  const gf = new GiphyFetch('AieJpLdgz0GiayPx6c2nn5iXxgCtjxmo');

  const randomlySelectNextItem = useCallback(() => {
    const items = data?.items;
    const idx = getRandomArrayIndex(items?.length);
    setSelectedItem(items?.[idx] as DataItem);
  }, [selectedItem, setSelectedItem, data]);

  const answerIsCorrect = useMemo(() => {
    if (selectedItem?.type === selectedAnswer) {
      return true;
    }

    return false;
  }, [selectedItem, selectedAnswer]);

  const handlePlayAgain = useCallback(() => {
    setSelectedAnswer(null);
    randomlySelectNextItem();
  }, [setSelectedAnswer, setSelectedItem]);

  useEffect(() => {
    randomlySelectNextItem();
  }, []);

  useEffect(() => {
    const fetchGifFromGiphy = async () => {
      let gifIds;

      if (answerIsCorrect) {
        gifIds = GIF_IDS?.correct;
      } else {
        gifIds = GIF_IDS?.incorrect;
      }

      const randomGifId = gifIds?.[getRandomArrayIndex(gifIds?.length)];
      const giphyResponse = (await gf.gif(randomGifId))?.data;
      setGif(giphyResponse);
    };
    fetchGifFromGiphy();
  }, [answerIsCorrect]);

  return (
    <div className={styles.container}>
      {selectedItem && !selectedAnswer && (
        <>
          <h2 className={styles.heading}>Fact or myth?</h2>
          <Card item={selectedItem} onNext={randomlySelectNextItem} />
          <ButtonGroup>
            <ActionButton onPress={() => setSelectedAnswer(ContentType.FACT)}>
              {capitalizeFirstLetters(ContentType.FACT)}
            </ActionButton>
            <ActionButton
              onPress={() => setSelectedAnswer(ContentType.MYTH)}
              variant="secondary"
            >
              {capitalizeFirstLetters(ContentType.MYTH)}
            </ActionButton>
          </ButtonGroup>
        </>
      )}

      {selectedAnswer && (
        <div className={styles.answerResultContainer}>
          <span className={styles.answerResultText}>
            {answerIsCorrect ? 'Correct!' : 'Incorrect :('}
          </span>

          {gif && (
            <>
              <Gif gif={gif} width={300} />
              <img
                src={poweredByGiphyAttribution}
                className={styles.giphyAttribution}
              />
            </>
          )}
          <ButtonGroup>
            <ActionButton onPress={handlePlayAgain}>Play again</ActionButton>
            <ActionButton
              onPress={() => window.open(selectedItem?.source)}
              variant="secondary"
            >
              Source
            </ActionButton>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
};

export default HomePage;
