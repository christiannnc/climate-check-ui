import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface ButtonGroupProps {
  children: ReactNode;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ButtonGroup;
