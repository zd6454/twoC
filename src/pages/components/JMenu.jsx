import React from "react";
import {Tabs} from 'antd'

const Index=()=>{
  return <div style={{position:"fixed",top:0,left:250,zIndex:200}}>
   <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: '账本数据',
          key: '1',
        },
        {
          label: '区块结构',
          key: '2',
        },
        {
          label: '运维监控',
          key: '3',
        },
        {
          label: '性能测试',
          key: '4',
        },
      ]}
    />
    </div>

}
export default Index;