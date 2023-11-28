import { request } from 'umi';
import {message} from 'antd';

// 下载智能合约模板
export async function downloadQuery(param) {
    return request(param, {
        method: 'GET',
    }).catch((error)=> {
        message.error('下载失败')
    });
}