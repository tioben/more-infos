import styles from './Title.module.css';

function Title({ msg, fontcolor }) {
  const msgUpper = msg.toUpperCase();

  return (
    <div className={styles.Title_Container}>
      <h1 style={{ color: fontcolor }}>{msgUpper}</h1>
    </div>
  );
}

export default Title;
