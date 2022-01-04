import React, { useState } from 'react';
import VanField from '@vant/weapp/lib/field';
import { View } from 'remax/wechat';
import VanCellGroup from '@vant/weapp/lib/cell-group';

export default () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setValue(e.detail)
    if (e.detail) {
      setError('')
    }
  }

  return (
    <View>
      <VanCellGroup>
        <VanField label='联系人' required errorMessage={error} value={value} bind:change={handleChange}></VanField>
      </VanCellGroup>
    </View>
  )
}