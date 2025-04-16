import { FC, useState } from 'react';
import logo from '../../assets/logo.svg';
import hamburgerIcon from '../../assets/hamburger_menu.svg';
import styles from './index.module.css';
import { useNavigate } from 'react-router';
import NavLink from '../NavLink';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LINK_MAP = [
    { label: 'Play game', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} onClick={() => navigate('/')} />

      <img
        src={hamburgerIcon}
        className={styles.hamburger}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />

      <div
        className={`${styles.navLinksContainer} ${
          isMenuOpen ? styles.showMenu : ''
        }`}
      >
        {LINK_MAP.map(({ label, path }) => (
          <NavLink
            key={path}
            label={label}
            path={path}
            onClick={() => setIsMenuOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
