
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm,ProFormDatePicker, ProFormText,ProFormUploadButton} from '@ant-design/pro-components';
import {Button,Card,Row,Col, Space} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import los from '../Asserts/logo.png'

const Index=()=>{
    const formRef1 = useRef()
    const formRef2 = useRef()
    const formRef3 = useRef()

    //提交函数，点击按钮触发该事件
    const onfinish=(type,values)=>{
      console.log(values,'123')
    }

    return <PageContainer
    content={'中间为三个并排的card，左边的card是文字存证，用户输入“作品名称”、“创作者”、“创作日期”，可产生对应hash值；同理，中间card是中型文件存储，产生hash和IPFS；右边card是大型文件存储，上传文件后，产生hash和HDFS。下边是效果展示，对上传的数据上面加一个湖南大学的章。'}
    >
      <Space>
        <Card title={'文字存证'} style={{width:390,height:400}}>
            <ProForm
                layout="horizontal"
                formRef={formRef1}
                onFinish={(e)=>onfinish(1,e)}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormText
                    width="md"
                    name="name"
                    label="作品名称"
                    placeholder="请输入作品名称"
                />
                <ProFormText
                    width="md"
                    name="author"
                    label="创作者"
                    placeholder="请输入创作者"
                />
               <ProFormDatePicker 
                    width="md"
                    name="date"
                    label="创作日期"
                    placeholder="请选择创作日期"
               
               />
            </ProForm>

            <Space style={{marginTop:40}}>hash：{0}</Space>
        </Card>
        <Card title={'文件存储'} style={{width:390,height:400}}>
           <ProForm
                layout="horizontal"
                formRef={formRef2}
                onFinish={(e)=>onfinish(2,e)}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormUploadButton
                    label='上传中型文件'
                    width="md"
                    name="img"
                    max={1}
                    icon={<PlusOutlined />}
                />
            </ProForm>
            <div style={{marginTop:100,display:'grid'}}>
              <Space >hash：{0}</Space>
              <Space >IPFS：{0}</Space>
            </div>
            
        </Card>
        <Card title={'大型文件存储'} style={{width:390,height:400}}>
           <ProForm
                layout="horizontal"
                formRef={formRef3}
                onFinish={(e)=>onfinish(3,e)}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormUploadButton
                    label='上传大型文件'
                    width="md"
                    name="img"
                    max={1}
                    icon={<PlusOutlined />}
                />
            </ProForm>
            <div style={{marginTop:100,display:'grid'}}>
              <Space >hash：{0}</Space>
              <Space >HDFS：{0}</Space>
            </div>
        </Card>
      </Space>
      <Card title={'效果展示'} style={{width:'100%',marginTop:20}}>
        <div></div>
        <div style={{float:'right'}}>
           <img  style={{width:128,height:128}} src={los}/>
        </div>
       
      </Card>
    </PageContainer>
}
export default Index