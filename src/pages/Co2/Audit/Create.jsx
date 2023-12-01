import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormDatePicker,ProFormText} from '@ant-design/pro-components';
import {Card,message} from 'antd'
import JMenu from '../../components/JMenu'
import {add} from './serves'

const Index=()=>{
    const formRef= useRef()
    const [flag,setFlag] = useState('2')

    const options=[
        {
          value: 'sany',
          label: 'sany',
        },
        {
          value: 'zloy',
          label: 'zloy',
        },
    ]

    return <PageContainer>
        <Card style={{width:500,margin:'0 auto'}}>
        <ProForm
            layout="horizontal"
            formRef={formRef}
            onFinish={async (values) => {
                console.log(values)
                await add(values);
                message.success('提交成功')
            }}
            submitter={{
                render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
            }}
        >
            <ProFormText
                width="md"
                name="CarbonAuditInfoID"
                label="申请ID"
                placeholder="请输入ID"
            />
            <ProFormSelect
                  showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                  width="md"
                  name="types"
                  label={'公司类型'}
                  options={options}
            />
            <ProFormDatePicker 
                width={"md"}
                name="Date"
                label="申请日期"
                placeholder={"请选择日期"}
                rules={[{required: true, message:'请选择日期',},]}
            />
            <ProFormText
                width="md"
                name="PlanCarbon"
                label="碳计划量"
                placeholder="请输入计划量"
            />
            <ProFormText
                width="md"
                name="RealCarbon"
                label="碳实际量"
                placeholder="请输入实际量"
            />
        </ProForm>
        </Card>
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}

export default Index;