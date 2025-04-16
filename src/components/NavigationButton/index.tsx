import { FC, useMemo } from 'react';
import { NavigationType } from '../../enums';
import leftArrow from '../../assets/left_arrow.svg';
import rightArrow from '../../assets/right_arrow.svg';
import styles from './index.module.css';

interface NavigationButtonProps {
  type: NavigationType;
  onClick: () => void;
  label?: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({
  type,
  label,
  onClick,
}) => {
  const icon = useMemo(() => {
    if (type === NavigationType.FORWARD) {
      return rightArrow;
    }
    return leftArrow;
  }, []);

  return (
    <div className={styles.container} onClick={onClick}>
      {type === NavigationType.FORWARD && (
        <span className={styles.label}>{label}</span>
      )}
      <img src={icon} className={styles.navigationIcon} />
      {type === NavigationType.BACKWARDS && (
        <span className={styles.label}>{label}</span>
      )}
    </div>
  );
};

export default NavigationButton;
