
import styles from './index.css';
import { connect } from 'dva';
import React from 'react';

function Index(props) {
  console.log(props.summoner);
  return (
    <div className={styles.normal}>
      <h1>Page Summoner</h1>
      <h2>This is {JSON.stringify(props.summoner)}</h2>
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Index);
