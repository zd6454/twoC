import { request } from 'umi';
import {message} from 'antd';

//创建公私钥对
export async function create(data) {
    const form = new FormData()
    // const Keys = Object.Keys(data)
    for(let item in data){
        form.append(item,data[item])
    }
    return request('/hnuFinTechPlatform/supplyBlokchain/issueBill', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  //待接收
  export async function queryWaitAccept(data) {
    const form = new FormData()
    form.append('types',data?.types||'consumer')
    return request('/hnuFinTechPlatform/supplyBlokchain/queryByWaitEndorseAcct', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  //发行的
  export async function queryPublishAccept(data) {
    const form = new FormData()
    form.append('types',data?.types||'zhongxin')
    return request('/hnuFinTechPlatform/supplyBlokchain/queryByDrwrAcct', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  //拥有的
  export async function queryAcceptAccept(data) {
    const form = new FormData()
    form.append('types',data?.types||'zhongxin')
    return request('/hnuFinTechPlatform/supplyBlokchain/queryByHoldrAcct', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  //单号查询
  export async function queryByBill(data) {
    const form = new FormData()
    form.append('types',data.types)
    form.append('billInfoNo',data.billInfoNo)
    return request('/hnuFinTechPlatform/supplyBlokchain/queryBillByInfoNo', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
//溯源ID查询
export async function queryHisById(data) {
  const form = new FormData()
  form.append('types',data.types)
  form.append('SourceBillInfoID',data.SourceBillInfoID)
  return request('/hnuFinTechPlatform/supplyBlokchain/queryBySourceBillInfoID', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('创建失败')
    });
}
export async function queryHisByIdAndTime(data) {
  const form = new FormData()
  form.append('types',data.types)
  form.append('SourceBillInfoID',data.SourceBillInfoID)
  form.append('SplitCount',data.SplitCount)
  return request('/hnuFinTechPlatform/supplyBlokchain/queryBysourceBillInfoSplitCount', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('创建失败')
    });
}
  export async function toOthers(data) {
    const form = new FormData()
    for(let item in data){
      form.append(item,data[item])
  }
    return request('/hnuFinTechPlatform/supplyBlokchain/accept', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  export async function giveOthers(data) {
    const form = new FormData()
    for(let item in data){
      form.append(item,data[item])
  }
    return request('/hnuFinTechPlatform/supplyBlokchain/endorse', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }

  export async function agree(data) {
    const form = new FormData()
    // const Keys = Object.Keys(data)
    form.append('BillInfoID',data.BillInfoID)
    form.append('WaitEndorseCmID',data.WaitEndorseCmID)
    form.append('types',data.types)
    return request('/hnuFinTechPlatform/supplyBlokchain/accept', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }
  export async function reject(data) {
    const form = new FormData()
    form.append('BillInfoID',data.BillInfoID)
    form.append('WaitEndorseCmID',data.WaitEndorseCmID)
    form.append('types',data.types)
    return request('/hnuFinTechPlatform/supplyBlokchain/reject', {
      method: 'POST',
      data:form,
    }).catch((error)=> {
        message.error('创建失败')
      });
  }