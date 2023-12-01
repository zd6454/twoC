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

export async function oneRestore(param) {
  const patch={
    '1': [
      '/hnuFinTechPlatform/fedBlokchain/clearEnvironment',
    ],
    '2': [
      '/hnuFinTechPlatform/carbonBlokchain/clearEnvironment',
    ],
    '3': [
      '/hnuFinTechPlatform/supplyBlokchain/clearEnvironment',
    ],
    '4': [
      '/hnuFinTechPlatform/storageBlokchain/clearEnvironment',
    ]
  };
  return request(patch[param]?.[0], {
    method: 'GET',
  }).catch((error)=> {
      message.error('还原失败')
  });
}

export async function deployChain(param) {
  const patch={
    '1': [
      '/hnuFinTechPlatform/fedBlokchain/deployChaincode',
    ],
    '2': [
      '/hnuFinTechPlatform/carbonBlokchain/deployChaincode',
    ],
    '3': [
      '/hnuFinTechPlatform/supplyBlokchain/deployChaincode',
    ],
    '4': [
      '/hnuFinTechPlatform/storageBlokchain/deployChaincode',
    ]
  };
  return request(patch[param]?.[0], {
    method: 'GET',
  }).catch((error)=> {
      message.error('安装失败')
  });
}

export async function showHomePage() {
  return request(":6001/webui", {
    method: 'GET',
    type:'no'
  }).catch((error)=> {
      message.error('主页显示失败')
  });
}