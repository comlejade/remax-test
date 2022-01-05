import React, { useState } from 'react';
import { View } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import VanField from '@vant/weapp/lib/field';
import VanCellGroup from '@vant/weapp/lib/cell-group';
import styles from './index.css'
export default () => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')

  const handleChange = (e) => {
    setValue(e.detail)
  }

  const handleClick = () => {
    console.log('2222')
  }
  
  return (
    <View>
      <VanCellGroup>
        <VanField label="用药人" placeholder="请输入用药人真实姓名" type="text" label="联系人" value={value} bindchange={(e) => setValue(e.detail)} />
        <VanField label="联系人" type="digit" value={value2} bindchange={(e) => setValue2(e.detail)} />
        <VanField label="联系人" readonly value={value3} bind:click-input={() => {console.log('input clicked')}} />
      </VanCellGroup>
      <VanButton className={styles.btn} type="info" size="small" bindclick={handleClick} bindtap={'noop'}>点我</VanButton>
    </View>
  )
}