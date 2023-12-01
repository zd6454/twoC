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
                label="网络名称"
                placeholder="请输入networkName"
            />
            <ProFormText
                width="md"
                name="channelName"
                label="通道名称"
                placeholder="请输入channelName"
            />
            <ProFormText
                width="md"
                name="channelorganizations"
                label="通道组织"
                placeholder="请输入channelorganizations"
            />
            <ProFormText
                width="md"
                name="organizations"
                label="组织名称"
                placeholder="请输入organizations"
            />
            <ProFormText
                width="md"
                name="domain"
                label="对应域名"
                placeholder="请输入domain"
            />
            <ProFormText
                width="md"
                name="peerCount"
                label="节点数目"
                placeholder="请输入peerCount"
            />
            <ProFormText
                width="md"
                name="userCount"
                label="用户数目"
                placeholder="请输入userCount"
            />
        </ProForm>
        </Card>
        
    </PageContainer>
}

export default Index;