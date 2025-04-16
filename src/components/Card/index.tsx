import { FC } from 'react';
import styles from './index.module.css';
import { DataItem } from '../../types';
import { NavigationType } from '../../enums';
import NavigationButton from '../NavigationButton';

interface CardProps {
  item: DataItem;
  onNext: (item: DataItem) => void;
  // onPrev: (item: DataItem) => void;
}

const Card: FC<CardProps> = ({ item, onNext }) => {
  const { content } = item;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentContainer}>{content}</div>

      <div className={styles.cardFooter}>
        <NavigationButton
          type={NavigationType.FORWARD}
          label="Skip"
          onClick={() => onNext(item)}
        />
      </div>
    </div>
  );
};

export default Card;
