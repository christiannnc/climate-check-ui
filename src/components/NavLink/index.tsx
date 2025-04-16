import { FC } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router';

interface NavLinkProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ label, path, onClick }) => {
  return (
    <Link to={path} className={styles.link} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavLink;
