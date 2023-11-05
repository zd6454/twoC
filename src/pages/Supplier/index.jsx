import React,{useRef,useState} from "react";
import { PageContainer, ProFormText} from '@ant-design/pro-components';
import {Button,Space,Popover} from 'antd'
import ZTable from '../components/ZTable'
import ZModal from '../components/ZModal'
import { PlusOutlined  } from '@ant-design/icons';

const Index=()=>{
    const actionRef = useRef()
    const formRef = useRef()
    const [createModalOpen,setModalOpen] = useState(false)

    const content = (
        <Space>
          <a style={{color:'green'}}>同意</a>
          <a style={{color:'red'}}>拒绝</a>
        </Space>
      );

    const columns=[
        {
            title: '票据id',
            dataIndex: 'title',
        },
        {
            title: '票据金额',
            dataIndex: 'money',
            valueType: 'text',
        },
        {
          title:'债权人',
          dataIndex: 'owner',
          hideInSearch:true,
          hideInForm: true,
      },
        {
          title:'接收者',
          dataIndex: 'money',
      },
        {
            title:'流转信息',
            dataIndex: 'name',
            hideInForm: true,
            render:(_,row)=><a>123</a>
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
            title:'操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <a key="update" onClick={()=>false} >
              修改
              </a>,
              <a key="goto" onClick={()=>false} >
                流转
              </a>,
               <a key="acc" onClick={()=>false} >
                <Popover content={content} >
                  接收
                </Popover>
               </a>,
              <a key="delete" onClick={()=> null} >
                删除
              </a>,
            ],
          },
    ]
    const createItem=()=>(<div>
         <ProFormText
          rules={[
            {
              required: true,
              message: '请输入票据id'
            },
          ]}
          label='票据id'
          width="md"
          name="title"
        />
         <ProFormText
          rules={[
            {
              required: true,
              message: '请输入票据id'
            },
          ]}
          label='金额'
          width="md"
          name="money"
        />
         <ProFormText
          rules={[
            {
              required: true,
              message: '请输入owner'
            },
          ]}
          label='债权人(owner)'
          width="md"
          name="owner"
        />
         <ProFormText
          rules={[
            {
              required: true,
              message: '请输入接收者'
            },
          ]}
          label='接收者'
          width="md"
          name="accer"
        />
    </div>)

    const handleClick=()=>{
        setModalOpen(true)
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

     const handleFinish=(values)=>{
         console.log(values,'123')
         setModalOpen(false)
     }
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
           rowkey = 'paperId'
        />
        <ZModal
          createModalOpen={createModalOpen}
          handleModalOpen={setModalOpen}
          title={'借据'}
          formRef={formRef}
          handleFinish={handleFinish}
          createItem={createItem}
        />
    </PageContainer>
}
export default Index