import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);


export function Header() {
  return (
    <header className={styles.header}>
      <strong>nexon-feed</strong>
      <img src={igniteLogo} alt="Logo ignite" />
    </header>
  )
}