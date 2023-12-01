import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormUploadButton,ProFormText} from '@ant-design/pro-components';
import {Card,message} from 'antd'
import {add} from './serves'
import { PlusOutlined } from '@ant-design/icons';
import JMenu from '../components/JMenu'

const Index=()=>{
    const formRef= useRef()

    return <PageContainer>
        <Card style={{width:500,margin:'0 auto'}}>
        <ProForm
            layout="horizontal"
            formRef={formRef}
            // onFinish={onfinish}
            onFinish={async (values) => {
                console.log(values)
                await add(values);
                message.success('新建成功')
            }}
            submitter={{
                render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
            }}
        >

            <ProFormText
                width="md"
                // name="money"
                name="networkName"
                label="networkName"
                placeholder="请输入网络"
            />
            <ProFormText
                width="md"
                name="channelName"
                label="channelName"
                placeholder="请输入通道"
            />
            <ProFormText
                width="md"
                name="channelorganizations"
                label="channelorganizations"
                placeholder="请输入通道组织名字"
            />
            <ProFormText
                width="md"
                name="organizations"
                label="organizations"
                placeholder="请输入组织名字"
            />
            <ProFormText
                width="md"
                name="domain"
                label="domain"
                placeholder="请输入域名"
            />
            <ProFormText
                width="md"
                name="peerCount"
                label="peerCount"
                placeholder="请输入节点数"
            />
            <ProFormText
                width="md"
                name="userCount"
                label="userCount"
                placeholder="请输入用户数"
            />
        </ProForm>
        </Card>
        
    </PageContainer>
}

export default Index;