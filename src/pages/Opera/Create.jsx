import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormUploadButton,ProFormText} from '@ant-design/pro-components';
import {Card} from 'antd'
import { PlusOutlined } from '@ant-design/icons';

const Index=()=>{
   const formRef= useRef()

    const onfinish=()=>{

    }
    return <PageContainer>
        <Card style={{width:500,margin:'0 auto'}}>
        <ProForm
            layout="horizontal"
            formRef={formRef}
            onFinish={onfinish}
            submitter={{
                render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
            }}
        >
            <ProFormText
                width="md"
                name="money"
                label="链码"
                placeholder="请输链码"
            />
            <ProFormText
                width="md"
                name="money"
                label="网络"
                placeholder="请输入网络"
            />
            <ProFormText
                width="md"
                name="money"
                label="通道"
                placeholder="请输入通道"
            />
        </ProForm>
        </Card>
    </PageContainer>
}

export default Index;