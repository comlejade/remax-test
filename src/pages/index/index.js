import React from 'react';
import { View, Navigator } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import styles from './index.scss'
export default () => {
  const handleClick = () => {
    console.log('1111')
  }
  return (
    <View>
      <VanButton type="primary" bindclick={handleClick}>点我</VanButton>
    </View>
  );
};
