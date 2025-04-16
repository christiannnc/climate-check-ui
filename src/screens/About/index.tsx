import { FC } from 'react';
import styles from './index.module.css';
import { CLIMATE_CHECK_REPO_URL } from '../../constants';

const AboutPage: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Hi there!</h1>

        <p className={styles.textContent}>
          I built this site for my ES 100 Climate Action Project. There is a lot
          of misinformation out there regarding climate change, and its
          important that people know the facts. This site aims to help with
          that!
        </p>

        <p className={styles.textContent}>
          The game is simple. You're presented with a statement, and your goal
          is to determine if it is a fact or a myth. Once you answer you will
          see a source where you can read more if you're interested.
        </p>

        <p className={styles.textContent}>
          To get started, click <span>Play Game</span>!
        </p>
      </div>

      <div>
        <span className={styles.textContent}>
          btw, if you're interested, the source code is available{' '}
          <a
            className={styles.sourceCodeLink}
            href={CLIMATE_CHECK_REPO_URL}
            target="_blank"
          >
            <i>here</i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default AboutPage;
