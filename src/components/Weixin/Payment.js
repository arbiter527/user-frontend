import React from 'react';
import { connect } from 'dva';
import styles from './Payment.css';

function Payment({ price }) {
  return (
    <div className={styles.normal}>
      price: { price }
    </div>
  );
}

function mapStateToProps(state) {
  const { price } = state.weixinpayment;
  return { price };
}

export default connect(mapStateToProps)(Payment);
