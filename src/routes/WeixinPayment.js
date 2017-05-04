import React from 'react';
import { connect } from 'dva';
import styles from './WeixinPayment.css';
import WeixinPaymentComponent from '../components/Weixin/Payment';
import MainLayout from '../components/MainLayout/MainLayout';

function WeixinPayment() {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <WeixinPaymentComponent />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WeixinPayment);
