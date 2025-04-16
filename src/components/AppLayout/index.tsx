import { FC } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import styles from './index.module.css';

const AppLayout: FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{<Outlet />}</main>
    </>
  );
};

export default AppLayout;
