import React, { useState } from 'react';
import { View } from 'remax/wechat';
import VanButton from '@vant/weapp/lib/button';
import VanField from '@vant/weapp/lib/field';
import VanCellGroup from '@vant/weapp/lib/cell-group';
import styles from './index.css'
export default () => {
  const [idCard, setIdCard] = useState('')

  const handleClick = () => {
    console.log('2222')
  }

  const handleChange = (e) => {
    console.log(e.detail)
    setIdCard(e.detail)
  }

  return (
    <View>
      <VanCellGroup>
        <VanField label={"身份证号"} placeholder={"用药人身份证号"} type={"idcard"} maxlength={18} value={idCard} bindchange={handleChange} />
      </VanCellGroup>
      <VanButton className={styles.btn} type="info" size="small" bindclick={handleClick}>点我</VanButton>
    </View>
  )
}