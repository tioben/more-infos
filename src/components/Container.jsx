import styles from './Container.module.css';

function Container({ children }) {
  return <div className={styles.main_Container}>{children}</div>;
}

export default Container;
