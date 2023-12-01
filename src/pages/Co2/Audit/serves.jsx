import { request } from 'umi';
import {message} from 'antd';

// 提交报告
export async function add(data) {
  const form = new FormData()
  for(let item in data){
      form.append(item,data[item])
  }
  return request('/hnuFinTechPlatform/carbonBlokchain/issueCarbonAudit', {
      method: 'POST',
      data: form,
  }).catch((error)=> {
      message.error('提交失败')
    });
}

// 查询政府所有报告
export async function queryAll(data) {
  const form = new FormData()
  form.append('types',data?.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/queryByGovernment', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('查询失败')
    });
}

// 查询待审计报告
export async function queryWaitAccept(data) {
  const form = new FormData()
  form.append('types',data?.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/queryByWait', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('查询失败')
    });
}

// 根据ID查询
export async function queryHisById(data) {
  const form = new FormData()
  form.append('CarbonAuditInfoNo',data.CarbonAuditInfoNo)
  form.append('types',data.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/queryByInfoNo', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('查询失败')
    });
}

// 根据公司名查询
export async function queryHisByCompany(data) {
  const form = new FormData()
  form.append('types',data.company)
  return request('/hnuFinTechPlatform/carbonBlokchain/queryByCompany', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('查询失败')
    });
}

// 通过报告
export async function agree(data) {
  const form = new FormData()
  form.append('CarbonAuditInfoNo',data.CarbonAuditInfoID)
  form.append('types',data.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/accept', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
    message.error('操作失败')
  });
}

// 拒绝报告
export async function reject(data) {
  const form = new FormData()
  form.append('CarbonAuditInfoNo',data.CarbonAuditInfoID)
  form.append('types',data.types)
  return request('/hnuFinTechPlatform/carbonBlokchain/reject', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
    message.error('操作失败')
  });
}