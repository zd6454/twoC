import {ProTable} from '@ant-design/pro-components';
import React,{useRef} from 'react';

const index=(props)=>{
    const {formRef=useRef(),search=true,rowkey,title,actionRef,rule,columns,setSelectedRows,toolBar,dataSource} = props;
    return <div>
        <ProTable
        headerTitle={title}
        style={{marginBottom:20}}
        actionRef={actionRef}
        formRef={formRef}
        rowKey={rowkey}
        dataSource={dataSource}
        toolBarRender={toolBar}
        request={rule}
        search={search}
        columns={columns}
        pagination={{
          // pageSize: 20,
          showSizeChanger: true,
        }}
        rowSelection={false}
      />
    </div>
}
export default index;
