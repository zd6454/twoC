import React from "react";
import {Tabs,Space,Button} from 'antd'
import {networkStop, networkStart} from './server'

const Index=(props)=>{
  const {flag} = props;
  const patch={
    '1':[
      'http://lidengjia.hnufintech.cn:20000/_utils',
      'http://lidengjia.hnufintech.cn:20053/',
      'http://lidengjia.hnufintech.cn:20050/',
      'http://lidengjia.hnufintech.cn:20049/,'
    ],
    '2':[
      'http://lidengjia.hnufintech.cn:20548/_utils',
      'http://lidengjia.hnufintech.cn:20607/',
      'http://lidengjia.hnufintech.cn:20604/',
      'http://lidengjia.hnufintech.cn:20603/',
    ],
    '3':[
      'http://lidengjia.hnufintech.cn:20253/_utils',
      'http://lidengjia.hnufintech.cn:20348/',
      'http://lidengjia.hnufintech.cn:20345/',
      'http://lidengjia.hnufintech.cn:20344/',
    ],
    '4':[
      'http://lidengjia.hnufintech.cn:20807/_utils',
      'http://lidengjia.hnufintech.cn:20854/',
      'http://lidengjia.hnufintech.cn:20851/',
      'http://lidengjia.hnufintech.cn:20850/',
    ]
  }
  return <div style={{position:"fixed",top:8,left:250,zIndex:150,}}>
    <Space>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: <a  href={patch[flag]?.[0]}>账本数据</a>,
            key: '1',
          },
          {
            label: <a  href={patch[flag]?.[1]}>区块结构</a>,
            key: '2',
          },
          {
            label: <a  href={patch[flag]?.[2]}>运维监控</a>,
            key: '3',
          },
          {
            label: <a  href={patch[flag]?.[3]}>性能测试</a>,
            key: '4',
          },
        ]}
      />
      <Space style={{margin:'0 0 20px 100px'}}>
        <Button  type="text" onClick={()=>{
          networkStart(flag)
        }}> 开启网络</Button>
        <Button type="text" onClick={()=>{
          networkStop(flag)
        }}> 暂停网络</Button>
      </Space>
  
    </Space>
    </div>

}
export default Index;