import { request } from 'umi';
import {message} from 'antd';

// 查询所有网络
export async function queryAllNetwork(){
  const params={
    "types": "admin",
  }
  return request('/hnuFinTechPlatform/operation/queryAllNetwork', {
      method: 'POST',
      data: params
  }).catch((error)=> {
      console.log(error);
    });
}

// 查询特定网络
export async function querAll(data){
    if(data.network){
      const params={
        "Types": "admin",
        "NetworkName": data?.network,
        "ChannelName": data?.channel
      }
      return request('/hnuFinTechPlatform/operation/queryNetwork', {
          method: 'POST',
          data:params
      }).catch((error)=> {
          // message.error('获取失败')
          console.log(error);
      });
    }
}

export async function add(data) {
    const params ={
        "types": "admin",
        "networkName": data.networkName,
        "channelName": data.channelName,
        "organizations":[
          {
            "name": data.organizations,
            "domain": data.domain,
            "peerCount": parseInt(data.peerCount),
            "userCount": parseInt(data.userCount)
          },
        ],
        "channelorganizations":[
          {
            "name": data.channelorganizations
          }
        ],
    }
    return request('/hnuFinTechPlatform/operation/createNetwork', {
      method: 'POST',
      data:params,
    }).catch((error)=> {
        message.error('添加失败')
      });
  }

  export async function update(data) {
    const params ={
        paperId:data.paperId,
        bankId:data.bankId,
        title:data.title,
        startDate:data.startDate,
        endDate:data.endDate,
        type:data.type,
        questionNum:data.questionNum,
    }
    return request('/paper/update', {
      method: 'POST',
      data:params,
    }).catch((error)=> {
        message.error('添加失败')
      });
  }

  export async function deletes(data) {
    const params ={
      id:data.id,
    }
    return request('/paper/delete', {
      method: 'POST',
      data:params,
    }).catch((error)=> {
        message.error('添加失败')
      });
  }

  // 删除特定网络
  export async function deleteNetwork(data) {
    const params ={
      "Types": "admin",
      "NetworkName": data?.networkname,
      "ChannelName": data?.channelname,
    }
    return request('/hnuFinTechPlatform/operation/clearNetwork', {
      method: 'POST',
      data: params,
    }).catch((error)=> {
        message.error('删除失败')
      });
  }

  // 删除所有网络
  export async function deleteAllNetwork() {
    const params ={
      "Types": "admin",
    }
    return request('/hnuFinTechPlatform/operation/clearAllNetwork', {
      method: 'POST',
      data: params,
    }).catch((error)=> {
        message.error('删除失败')
      });
  }

  // 清理docker环境
  export async function clearAllDocker() {
    return request('/hnuFinTechPlatform/operation/clearDockerEnvironment', {
      method: 'GET',
    }).catch((error)=> {
        message.error('删除失败')
      });
  }

  // 