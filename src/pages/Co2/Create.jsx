import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormUploadButton,ProFormText} from '@ant-design/pro-components';
import {Card} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import JMenu from '../components/JMenu'

const Index=()=>{
   const formRef= useRef()

    const onfinish=()=>{

    }

    const options=[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
       ]
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
           <ProFormSelect
                  showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                  width="md"
                  name="title1"
                  label={'选择公司'}
                  options={options}
           />
            <ProFormText
                width="md"
                name="money"
                label="申请补贴"
                placeholder="请输入申请补贴金额"
            />
            <ProFormText
                width="md"
                name="money"
                label="申请贷款"
                placeholder="请输入申请贷款金额"
            />
            <ProFormUploadButton
                label='上传材料'
                width="md"
                name="img"
                max={1}
                icon={<PlusOutlined />}
            />
        </ProForm>
        </Card>
        <JMenu />
    </PageContainer>
}

export default Index;