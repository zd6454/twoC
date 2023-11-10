
import React,{useEffect,useState,useRef} from "react";
import { PageContainer} from '@ant-design/pro-components';
import ZTable from '../components/ZTable'
import {Button,Space,Popover} from 'antd'
import { PlusOutlined  } from '@ant-design/icons';
import {history} from 'umi';
import JMenu from '../components/JMenu'

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
            title: '公司名',
            dataIndex: 'title',
        },
        {
            title: '补贴金额',
            dataIndex: 'money',
            valueType: 'text',
        },
        {
          title:'贷款金额',
          dataIndex: 'money2',
          hideInForm: true,
      },
        {
          title:'证明材料',
          dataIndex: 'money',
          render:(_,row)=><a>相关材料</a>
      },
        {
            title:'申请人',
            dataIndex: 'name',
            hideInForm: true,
        },
        {
            title:'状态',
            dataIndex: 'type',
            valueEnum: {
                0: {
                  text: '待审核',
                  status: 'Default',
                },
                1: {
                  text: '通过',
                  status: 'success',
                },
                1: {
                    text: '未通过',
                    status: 'error',
                  },
              },
        },
        {
          title: '开始时间',
          dataIndex: 'startDate',
          valueType: 'text',
      },
        {
            title:'操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <a key="update" onClick={()=>false} >
              修改
              </a>,
               <a key="update" onClick={()=>false} >
                <Popover content={content} >
                  审核
                </Popover>
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
           title={'金融数据'}
           actionRef={actionRef}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={toolBar}
           rule={rule}
           search={true}
           rowkey = 'paperId'
        />
        <JMenu />
    </PageContainer>
}
export default Index