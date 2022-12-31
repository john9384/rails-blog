import styles from './Navbar.module.css';
export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Rails Blogger</span>
        </div>
        <ul className={styles.navList}>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </div>
    </nav>
  );
};