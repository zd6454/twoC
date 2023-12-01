
import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormDatePicker,ProFormText} from '@ant-design/pro-components';
import {Card} from 'antd'
import JMenu from '../../components/JMenu'
import {pay} from './serves'

const Index=()=>{
    const formRef= useRef()
    const [flag,setFlag] = useState('2')

    const options=[
        {
          value: 'government',
          label: 'government',
        },
        {
          value: 'consumer',
          label: 'consumer',
        },
    ]

    return <PageContainer>
        <Card style={{width:500,margin:'0 auto'}}>
        <ProForm
            layout="horizontal"
            formRef={formRef}
            onFinish={async (values) => {
                // console.log(values)
                await pay(values);
                message.success('转账成功')
            }}
            submitter={{
                render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
            }}
        >
            <ProFormText
                width="md"
                name="from"
                label="转账账号"
                placeholder="请输入转账账号"
            />
            <ProFormText
                width="md"
                name="to"
                label="接收账号"
                placeholder="请输入接收账号"
            />
            <ProFormText
                width="md"
                name="symbol"
                label="代币简称"
                placeholder="请输入代币简称"
            />
            <ProFormText
                width="md"
                name="amount"
                label="交易份额"
                placeholder="请输入交易份额"
            />
            <ProFormSelect
                  showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                  width="md"
                  name="types"
                  label={'账户类型'}
                  options={options}
            />
        </ProForm>
        </Card>
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}

export default Index;