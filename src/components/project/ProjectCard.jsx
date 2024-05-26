import styles from './ProjectCard.module.css';
import { useState, useEffect } from 'react';

function ProjectCard({ cargo, empresa, data, more_info, src_img, fontcolor }) {
  const [contentStatus, setContentStatus] = useState(false);
  const [display, setDisplay] = useState('none');
  const [transform, setTransform] = useState('transform: rotate(-90deg)');

  useEffect(() => {
    setDisplay(contentStatus ? 'flex' : 'none');
  }, [contentStatus]);

  useEffect(() => {
    setTransform(contentStatus ? 'rotate(90deg)' : 'rotate(-90deg)');
  }, [contentStatus]);

  function showMore() {
    setContentStatus(!contentStatus);
  }

  return (
    <div className={styles.Main_Container}>
      <div className={styles.Container_Title}>
        <ul>
          <li>
            <h1 style={{ color: fontcolor }}>{cargo}</h1>
          </li>
          <li>
            <p>{empresa}</p>
            <p>{data}</p>
          </li>
        </ul>
        <button onClick={showMore}>
          <svg
            style={{ transform: transform }}
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"
            />
          </svg>
        </button>
      </div>
      <div className={styles.Container_more_info} style={{ display: display }}>
        <img src={src_img} alt="empresa-logo" />
        <pre className={styles.Pree}>{more_info}</pre>
      </div>
    </div>
  );
}

export default ProjectCard;
