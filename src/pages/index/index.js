import React, { useState } from 'react';
import { View, Navigator } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import VanField from '@vant/weapp/lib/field';
import styles from './index.css'

export default () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    console.log(e.detail)
    setValue(e.detail)
  }

  const handleClick = () => {
    console.log('1111')
  }

  return (
    <View>
      <VanField label="联系人" value={value} bindchange={handleChange} />
      <VanButton type="primary" bindclick={handleClick}>点我</VanButton>
    </View>
  );
};
