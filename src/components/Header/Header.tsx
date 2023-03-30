
import styles from './Header.module.sass'

export function Header () {
  return (
    <>
   <header>
      <div className={styles.loop_wrapper}>
    <div className={styles.mountain}></div>
    <div className={styles.hill}></div>
    <div className={styles.tree}></div>
    <div className={styles.tree}></div>
    <div className={styles.tree}></div>
    <div className={styles.tree}></div>
    <div className={styles.truck}></div>
    <div className={styles.wheels}></div>
  </div> 
   </header>
 
  </>
  );
}
