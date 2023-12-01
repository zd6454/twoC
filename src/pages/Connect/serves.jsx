import { request } from 'umi';
import {message} from 'antd';

//数据上传
export async function upload(data) {
  const form = new FormData()
  form.append('types',data.types)
  form.append('trainData',data.trainData)
  return request('/hnuFinTechPlatform/fedBlokchain/traindataUpload', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('上传失败')
    });
}
//数据下载
export async function download(data) {
  const form = new FormData()
  form.append('types',data.types)
  form.append('filename',data.filename)
  return request('/hnuFinTechPlatform/fedBlokchain/traindataDownload', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('失败')
    });
}
//数据查询
export async function query(data) {
  return request('/hnuFinTechPlatform/fedBlokchain/queryTraindata', {
    method: 'POST',
    param:data
  }).catch((error)=> {
      message.error('失败')
    });
}
//参数获取
export async function queryParam(data) {
  return request('/hnuFinTechPlatform/fedBlokchain/getResult', {
    method: 'GET',
  }).catch((error)=> {
      message.error('失败')
    });
}
//训练数据
export async function train(data) {
  const form = new FormData()
  for(let it in data){
    form.append(it,data[it])
  }
  return request('/hnuFinTechPlatform/fedBlokchain/trainModel', {
    method: 'POST',
    data:form
  }).catch((error)=> {
      message.error('失败')
    });
}