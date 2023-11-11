import { request } from 'umi';
import {message} from 'antd';

export async function querAll(data) {
  console.log(data,'data')
    const params={
      "Types":"admin",
      "NetworkName":"lidengjia",
      "ChannelName":"tsinghua"
    }
    return request('/hnuFinTechPlatform/operation/QueryNetwork', {
      method: 'POST',
      data:params
    }).catch((error)=> {
        message.error('获取失败')
      });
  }

  export async function querBank(data) {
    const params={
        size:100||null,
        page:1
    }
    return request('/question_bank/query_list', {
      method: 'POST',
      data:params
    }).catch((error)=> {
        message.error('获取失败')
      });
  }

  export async function querquizs(data) {
    const params={
        id:data.id
    }
    return request('/paper/query_by_id', {
      method: 'POST',
      data:params
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function querrecords(data) {
    const params={
        id:data.id
    }
    return request('/record/query_by_paper_id', {
      method: 'POST',
      data:params
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function querranks(data) {
    const params={
        id:data.id
    }
    return request('/record/get_rank_by_paper_id', {
      method: 'POST',
      data:params
    }).catch((error)=> {
        message.error('获取失败')
      });
  }
  export async function quernums(data) {
    return request('/record/get_all_paper_finish_num', {
      method: 'GET',
    }).catch((error)=> {
        message.error('获取失败')
      });
  }

export async function add(data) {
    const params ={
        bankId:data.bankId,
        title:data.title,
        startDate:data.startDate,
        endDate:data.endDate,
        type:data.type,
        questionNum:data.questionNum,
    }
    return request('/paper/add_paper', {
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