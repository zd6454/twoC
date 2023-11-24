import { request } from 'umi';
import {message} from 'antd';

//创建公私钥对
export async function create(data) {
  const form = new FormData()
  form.append('userName',data.userName)
  form.append('passWord',data.passWord)
  return request('/hnuFinTechPlatform/storageBlokchain/rsakey', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('添加失败')
    });
}
//注册用户
export async function register(data) {
  const form = new FormData()
  form.append('userName',data.userName)
  form.append('sk',data.sk)
  form.append('types',data.types)
  return request('/hnuFinTechPlatform/storageBlokchain/registerUser', {
    method: 'POST',
    data:form,
  }).catch((error)=> {
      message.error('注册失败')
    });
}

export async function querAll(data) {
  console.log(data,123)
  const form = new FormData()
  form.append('userName',data.userName)
  form.append('passWord',data.passWord)
    return request('/hnuFinTechPlatform/storageBlokchain/keyShow', {
      method: 'POST',
      data:form
    })
  }

  export async function querPkBySk(data) {
    const form = new FormData()
    form.append('sk',data.sk)
    return request('/hnuFinTechPlatform/storageBlokchain/rsakeyRestore', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function querAccountByPk(data) {
    const form = new FormData()
    form.append('pk',data.pk)
    form.append('types',data.types)
      return request('/hnuFinTechPlatform/storageBlokchain/searchUser', {
        method: 'POST',
        data:form
      })
    }
  export async function querVideoAll(data) {
    const form = new FormData()
    form.append('sk',data.sk)
    form.append('types',data.types)
    return request('/hnuFinTechPlatform/storageBlokchain/queryVideoByUserName', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function querVideoByHash(data) {
    const form = new FormData()
    form.append('hash',data.hash)
    form.append('types',data.types)
    return request('/hnuFinTechPlatform/storageBlokchain/queryVideoByHash', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function querVideoByType(data) {
    const form = new FormData()
    form.append('types',data.types)
    return request('/hnuFinTechPlatform/storageBlokchain/queryVideoByOrgName', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function uploadFile(data) {
    const form = new FormData()
    form.append('types',data.types)
    form.append('sk',data.sk)
    form.append('file',data.file)
    return request('/hnuFinTechPlatform/storageBlokchain/videoUpload', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('上传失败，请检查网络')
      });
  }

  export async function downloadFile(data) {
    const form = new FormData()
    form.append('filename',data.filename)
    return request('/hnuFinTechPlatform/storageBlokchain/videoDownload', {
      method: 'POST',
      data:form
    }).catch((error)=> {
        message.error('下载失败')
      });
  }