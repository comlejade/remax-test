import React from 'react';
import { View } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import styles from './index.scss'
export default () => {
  const handleClick = () => {
    console.log('2222')
  }
  return (
    <View>
      <VanButton customClass={styles.btn} type="info" size="small" catchclick={handleClick} catchtap={'noop'}>点我</VanButton>
    </View>
  )
}