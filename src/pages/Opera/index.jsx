
import React,{useEffect,useState,useRef} from "react";
import { PageContainer} from '@ant-design/pro-components';
import ZTable from '../components/ZTable'
import {Button,Space,Popover} from 'antd'
import { PlusOutlined  } from '@ant-design/icons';
import {history} from 'umi';

const Index=()=>{
    const actionRef = useRef()

    const content = (
        <Space>
          <a style={{color:'green'}}>通过</a>
          <a style={{color:'red'}}>拒绝</a>
        </Space>
      );
    const columns=[
        {
            title: '链码',
            dataIndex: 'title',
        },
        {
            title: '网络',
            dataIndex: 'money',
            hideInSearch:true,
            valueType: 'text',
        },
        {
          title:'通道',
          dataIndex: 'money2',
          hideInSearch:true,
          hideInForm: true,
      },
        {
          title:'组织名字',
          dataIndex: 'money',
          hideInSearch:true,
          render:(_,row)=><a>组织名字</a>
      },
        {
            title:'域名',
            dataIndex: 'name',
            hideInSearch: true,
        },
        {
            title:'链码名称',
            dataIndex: 'name',
            hideInSearch: true,
        },
        {
            title:'功能',
            dataIndex: 'name',
            hideInSearch: true,
        },
        {
          title: '创建时间',
          dataIndex: 'startDate',
          hideInSearch: true,
          valueType: 'text',
      },
        {
            title:'操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <a key="update" onClick={()=>false} >
                增加
              </a>,
              <a key="create" onClick={()=>false} >
                部署
              </a>,
              <a key="delete" onClick={()=> null} >
                删除
              </a>,
            ],
          },
    ]

    const handleClick=()=>{
        history.push('/co2/create')
    }

    const toolBar=() => [
        <Button
          type="primary"
          key="primary"
          onClick={handleClick}
        >
          <PlusOutlined /> {'新建'}
        </Button>,
      ]

      const rule=async(params)=>{
        return{ data:[{
            title:'123',
            money:'100',
            money2:'10',
            name:'张三',
            type:0,
        }]}
      }
    return <PageContainer>
        <ZTable
           title={'运维数据'}
           actionRef={actionRef}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={toolBar}
           rule={rule}
           search={true}
           rowkey = 'paperId'
        />
    </PageContainer>
}
export default Index