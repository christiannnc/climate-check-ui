import { FC, ReactNode, useMemo } from 'react';
import styles from './index.module.css';

interface ActionButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
}

const ActionButton: FC<ActionButtonProps> = ({
  onClick,
  variant = 'primary',
  children,
}) => {
  const containerClassName = useMemo(() => {
    const className = `${styles.buttonContainer}`;

    if (variant === 'primary') {
      return `${className} ${styles.fact}`;
    }

    if (variant === 'secondary') {
      return `${className} ${styles.myth}`;
    }

    return className;
  }, [variant]);
  return (
    <div onClick={onClick} className={containerClassName}>
      <span>{children}</span>
    </div>
  );
};

export default ActionButton;
