import React from "react";
import { ProDescriptions } from '@ant-design/pro-components';
import {Drawer} from 'antd'
import ZTable from '../components/ZTable'

const Index=(props)=>{
    const {open,setOpen,actionRef,currentRow,columns} = props
    const column2=[
          {
              title: '票据id',
              dataIndex: 'BillInfoID',
              ellipsis:true
          },
          {
              title: '票据金额',
              dataIndex: 'BillInfoAmt',
              ellipsis:true,
              valueType: 'text',
          },
          {
            title:'票据出票日期',
            dataIndex: 'BillInfoIsseDate',
            ellipsis:true
        },
          {
            title:'票据到期日期',
            dataIndex: 'billInfoDueDate',
            ellipsis:true
        },
          {
            title:'出票人名称',
            dataIndex: 'DrwrAcct',
            ellipsis:true
        },
          {
            title:'承兑人名称',
            dataIndex: 'AccptrAcct',
            ellipsis:true
        },
          {
            title:'收款人名称',
            dataIndex: 'PyeeAcct',
            ellipsis:true
        },
          {
            title:'当前持票人名称',
            dataIndex: 'HoldrAcct',
            ellipsis:true
        },
          {
            title:'状态',
            dataIndex: 'State',
            ellipsis:true
        },
      ]
    return  <Drawer
    title="票单详情"
    placement={'right'}
    width={1000}
    onClose={()=>setOpen(false)}
    open={open}
    extra={false}
  >
    <ProDescriptions
      actionRef={actionRef}
      title={''}
      request={async () => {
        return Promise.resolve({
          success: true,
          data: currentRow,
        });
      }}
      columns={columns}
      editable={false}
    >
    </ProDescriptions>
    <ZTable
           title={'流转详情'}
           actionRef={null}
           columns={column2}
           search={false}
           toolBar={()=>''}
           dataSource={currentRow?.History}
           rule={false}
           rowkey = ''
        />
  </Drawer>
}

export default Index