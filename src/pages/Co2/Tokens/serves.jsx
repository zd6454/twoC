import { request } from 'umi';
import {message} from 'antd';

//创建管理员账户
export async function creatAdmin(data) {
  const form = new FormData()
  form.append('types',data?.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/creatAdmin', {
      method: 'POST',
      data: form,
  }).catch((error)=> {
      message.error('创建管理员账户失败')
    });
}

//创建普通账户
export async function createAccount(data) {
  const form = new FormData()
  form.append('types',data?.types)
  form.append('accountName',data?.accountName)
  return request('/hnuFinTechPlatform/carbonBlokchain/createAccount', {
      method: 'POST',
      data: form,
  }).catch((error)=> {
      message.error('创建管理员账户失败')
    });
}

//发行代币
export async function initCurrency(data) {
  const form = new FormData()
  for(let item in data){
    form.append(item,data[item])
  }
  return request('/hnuFinTechPlatform/carbonBlokchain/initCurrency', {
      method: 'POST',
      data: form,
  }).catch((error)=> {
      message.error('发行代币失败')
    });
}

// 展示所有发行的代币
export async function showAllToken(data) {
  const form = new FormData()
  form.append('types',data?.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/showAllToken', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('展示所有发行的代币失败')
    });
}

// 展示对应币种下的所有用户
export async function showTokenUser(data) {
  const form = new FormData()
  form.append('types',data?.types)
  form.append('symbol',data?.symbol)
  return request('/hnuFinTechPlatform/carbonBlokchain/showTokenUser', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('展示用户失败')
    });
}

// 展示对应币种下的交易记录
export async function tokenHistory(data) {
  const form = new FormData()
  form.append('types',data?.types)
  form.append('symbol',data?.symbol)
  return request('/hnuFinTechPlatform/carbonBlokchain/tokenHistory', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('展示交易记录失败')
    });
}

// 展示对应币种和用户下的交易记录
export async function userTokenHistory(data) {
  const form = new FormData()
  form.append('types',data?.types)
  form.append('symbol',data?.symbol)
  form.append('accountName',data?.accountName)
  return request('/hnuFinTechPlatform/carbonBlokchain/userTokenHistory', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('展示对应币种和用户下的交易记录失败')
    });
}

// 更改代币状态
export async function setLock(data) {
  const form = new FormData()
  form.append('symbol',data?.symbol)
  form.append('types',data?.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/setLock', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('更改代币状态失败')
    });
}

// 更改账户状态
export async function frozenAccount(data) {
  const form = new FormData()
  form.append('types',data?.types)
  form.append('accountName',data?.accountName)
  return request('/hnuFinTechPlatform/carbonBlokchain/frozenAccount', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('更改账户状态失败')
    });
}

// 增加代币供应量
export async function mintToken(data) {
  const form = new FormData()
  for(let item in data){
    form.append(item,data[item])
  }
  return request('/hnuFinTechPlatform/carbonBlokchain/mintToken', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('增加代币供应量失败')
    });
}

// 减少代币供应量
export async function burnToken(data) {
  const form = new FormData()
  for(let item in data){
    form.append(item,data[item])
  }
  return request('/hnuFinTechPlatform/carbonBlokchain/burnToken', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('增加代币供应量失败')
    });
}

//转账
export async function pay(data) {
  const form = new FormData()
  for(let item in data){
    form.append(item,data[item])
  }
  return request('/hnuFinTechPlatform/carbonBlokchain/transferToken', {
      method: 'POST',
      data: form,
  }).catch((error)=> {
      message.error('代币交易失败')
    });
}
