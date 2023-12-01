import React from "react";
import {Tabs,Space,Button} from 'antd'
import {networkStop, networkStart, oneRestore, deployChain, showHomePage} from './server'

const Index=(props)=>{
  const {flag} = props;
  const patch={
    '1':[
      'http://lidengjia.hnufintech.cn:20000/_utils',
      'http://lidengjia.hnufintech.cn:20047/',
      'http://lidengjia.hnufintech.cn:20044/',
      'http://lidengjia.hnufintech.cn:20043/,'
    ],
    '2':[
      'http://lidengjia.hnufintech.cn:20500/_utils',
      'http://lidengjia.hnufintech.cn:20535/',
      'http://lidengjia.hnufintech.cn:20532/',
      'http://lidengjia.hnufintech.cn:20531/',
    ],
    '3':[
      'http://lidengjia.hnufintech.cn:20247/_utils',
      'http://lidengjia.hnufintech.cn:20300/',
      'http://lidengjia.hnufintech.cn:20297/',
      'http://lidengjia.hnufintech.cn:20296/',
    ],
    '4':[
      'http://lidengjia.hnufintech.cn:20735/_utils',
      'http://lidengjia.hnufintech.cn:20782/',
      'http://lidengjia.hnufintech.cn:20779/',
      'http://lidengjia.hnufintech.cn:20778/',
    ]
  }

  const items1=
    [
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
    ]
  return <div style={{position:"fixed",top:8,left:250,zIndex:150,}}>
    <Space>
      <Tabs
        defaultActiveKey="1"
        items={items1}
      />
      <Space style={{margin:'0 0 20px 100px'}}>
        <Button  type="text" onClick={()=>{
          networkStart(flag)
        }}> 开启网络</Button>
        <Button type="text" onClick={()=>{
          networkStop(flag)
        }}> 暂停网络</Button>
        <Button type="text" onClick={()=>{
          oneRestore(flag)
        }}> 一键还原</Button>
        <Button type="text" onClick={()=>{
          deployChain(flag)
        }}> 安装链码</Button>
        {flag=='4'&&
          <Button type="text" onClick={()=>{
            showHomePage()
          }}> IPFS主页</Button>
        }
      </Space>
  
    </Space>
    </div>

    }

export default Index;