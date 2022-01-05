import React, { useState } from 'react';
import { View, Navigator } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import VanField from '@vant/weapp/lib/field';
import styles from './index.css'

/**
 * remax 版本升级到 2.15.11 后，button的样式还存在问题，但是事件不再影响
 * VanField 的输入问题目前没能复现，但是实际项目中依然存在问题，
 * 当我注释掉某些包含 VanField 的其他页面后，测试页的输入事件才不受影响
 * 感觉可能是编译后生成的公共组件中的内容会相互冲突
 */
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
