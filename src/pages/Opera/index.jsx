
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm, ProFormText,ProFormUploadButton} from '@ant-design/pro-components';
import ZTable from '../components/ZTable'
import {Button,Space,Card,message, Upload} from 'antd'
import {querAll} from './serves'
import { PlusOutlined,UploadOutlined   } from '@ant-design/icons';
import {history} from 'umi';
import { waitFor } from "@testing-library/react";

const Index=()=>{
    const actionRef1 = useRef()
    const actionRef2 = useRef()
    const actionRef3 = useRef()
    const [fileList, setFileList] = useState([]);
    const [param1,setParam1] = useState({})
    const formRef = useRef()
    const content = (
        <Space>
          <a style={{color:'green'}}>通过</a>
          <a style={{color:'red'}}>拒绝</a>
        </Space>
      );
      
      //记录属性
    const columns=[
        {
            title: '链码',
            dataIndex: 'title',
            hideInSearch:true,
        },
        {
            title: '网络',
            dataIndex: 'money',
            hideInSearch:false,
            valueType: 'text',
        },
        {
          title:'通道',
          dataIndex: 'money2',
          hideInSearch:false,
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

         const end = await querAll(param1)
         if(end.msg=='200'){
          return{ data:end.data}
         }
        return{ data:[{
            title:'123',
            money:'100',
            money2:'10',
            name:'张三',
            type:0,
        }]}
      }

      const handleChange = (info) => {
        let newFileList = [...info.fileList];
        newFileList = newFileList.slice(-2);
        newFileList = newFileList.map((file) => {
          if (file.response) {
            file.url = file.response.url;
          }
          return file;
        });
        setFileList(newFileList);
        console.log(newFileList,'newfile')
      };
      const props = {
        onChange: handleChange,
        multiple: true,
      };
     
    return <PageContainer>
        <Card style={{marginBottom:20}}> 
        <Space>
         <ProForm 
           layout={'horizontal'}
           formRef={formRef}
           submitter={false}
           onFinish={async (values) => {
            // const end = await querAll({values})
            // const data = end.data;
            setParam1(values)
            // 重新调用rule方法
            actionRef1.current.reload()
            console.log(values, actionRef1);
            message.success('提交成功');
          }}
         >
          <Space>
           <ProFormText
                    width="md"
                    name="network"
                    label="网络"
                    placeholder="网络"
                />
            <ProFormText
                    width="md"
                    name="channel"
                    label="通道"
                    placeholder="通道"
              />
              <Button type="primary" onClick={()=>formRef.current.submit()} style={{marginBottom:20}}>查询</Button>
            </Space>
         </ProForm>
         <div style={{position:'relative',right:-220,top:0}}>
         <Upload 
          {...props}
          fileList={fileList}>
             <Button icon={<UploadOutlined />}>点击上传文件</Button>
        </Upload>

         </div>
           
        </Space>

        </Card>
        <ZTable
           title={'orger'}
           actionRef={actionRef1}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={toolBar}
           rule={rule}
           search={false}
           rowkey = 'paperId'
        />
              <ZTable
           title={'chain'}
           actionRef={actionRef2}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={null}
           rule={rule}
           search={false}
           rowkey = 'paperId'
        />
              <ZTable
           title={'docker'}
           actionRef={actionRef3}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={null}
           rule={rule}
           search={false}
           rowkey = 'paperId'
        />
    </PageContainer>
}
export default Index