import {ProTable} from '@ant-design/pro-components';
import React,{useRef} from 'react';

const index=(props)=>{
    const {formRef=useRef(),search=true,rowkey,title,actionRef,rule,columns,setSelectedRows,toolBar} = props;
    return <div>
              <ProTable
        headerTitle={title}
        actionRef={actionRef}
        formRef={formRef}
        rowKey={rowkey}
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
