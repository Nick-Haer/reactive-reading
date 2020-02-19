import React from 'react';

import styles from './jumbo.module.css';

function Jumbotron(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Search GoogleBooks for a Great Read</h1>
      <h3 className={styles.secondaryTitle}>
        Made with React, so you can react with a good book!
      </h3>
    </div>
  );
}

export default Jumbotron;
