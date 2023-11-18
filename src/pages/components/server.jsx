import { request } from 'umi';
import {message} from 'antd';

export async function networkStart(param) {
  const patch={
    '1': [
      '/hnuFinTechPlatform/fedBlokchain/networkStart',
    ],
    '2': [
      '/hnuFinTechPlatform/carbonBlokchain/networkStart',
    ],
    '3': [
      '/hnuFinTechPlatform/supplyBlokchain/networkStart',
    ],
    '4': [
      '/hnuFinTechPlatform/storageBlokchain/networkStart',
    ]
  };
  return request(patch[param]?.[0], {
    method: 'GET',
  }).catch((error)=> {
      message.error('开启失败')
  });
}

export async function networkStop(param) {
  const patch={
    '1': [
      '/hnuFinTechPlatform/fedBlokchain/networkStop',
    ],
    '2': [
      '/hnuFinTechPlatform/carbonBlokchain/networkStop',
    ],
    '3': [
      '/hnuFinTechPlatform/supplyBlokchain/networkStop',
    ],
    '4': [
      '/hnuFinTechPlatform/storageBlokchain/networkStop',
    ]
  };
  return request(patch[param]?.[0], {
    method: 'GET',
  }).catch((error)=> {
      message.error('关闭失败')
  });
}