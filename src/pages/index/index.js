import React from 'react';
import { View, Navigator } from 'remax/wechat';
import VanIcon from '@vant/weapp/lib/icon';
import VanImage from '@vant/weapp/lib/image';

export default () => {

  return (
    <View>
      <VanIcon name='location' color='#fff' size='32px' />
      <VanImage width={100} height={100} src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </View>
  );
};
