import styles from './Footer.module.sass'


export function Footer () {
  return (
  
    <footer className={styles.footer}>
  <div className={styles.waves}>
    <div className={styles.wave} id="wave1"></div>
    <div className={styles.wave} id="wave2"></div>
    <div className={styles.wave} id="wave3"></div>
    <div className={styles.wave} id="wave4"></div>
  </div>

  <ul className={styles.menu}>
    <li className={styles.menu__item}><span className={styles.menu__link}>React & TypeScript</span></li>
    
  </ul>

  <p style={{ opacity: 0.75 }}>@ThiagoLima</p>
</footer>
  );
}

