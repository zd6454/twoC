
import React,{useEffect,useState,useRef} from "react";
import { PageContainer} from '@ant-design/pro-components';
import ZTable from '../../components/ZTable'
import {Button} from 'antd'
import { PlusOutlined  } from '@ant-design/icons';
import {history} from 'umi';
import JMenu from '../../components/JMenu'

const Index=()=>{
    const actionRef = useRef()
    const [flag,setFlag] = useState('2')

    const columns=[
        {
            title: '公司名',
            dataIndex: 'title',
        },
        {
            title: '实际补贴',
            dataIndex: 'bankId',
            valueType: 'select',
            fieldProps:(_, row)=>{
              return {
              options:[],
              }
            },
        },
        {
          title:'实际贷款',
          dataIndex: 'questionNum',
          hideInForm: true,
      },
        {
            title:'申请人',
            dataIndex: 'finishNum',
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
        return []
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
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index