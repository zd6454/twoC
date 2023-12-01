import React,{useState,useRef} from "react";
import { PageContainer, ProForm ,ProFormSelect,ProFormDatePicker,ProFormText} from '@ant-design/pro-components';
import {Card, Row ,Col, message} from 'antd'
import JMenu from '../../components/JMenu'
import {creatAdmin, createAccount,initCurrency} from './serves'

const Index=()=>{
    const formRef= useRef()
    const [flag,setFlag] = useState('2')

    const options=[
        {
          value: 'government',
          label: 'government',
        },
        {
          value: 'admin',
          label: 'admin',
        },
    ]
    const options2=[
        {
          value: 'true',
          label: 'true',
        },
        {
          value: 'false',
          label: 'false',
        },
    ]

    return <PageContainer>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Card title="管理员账户创建" style={{margin:'0 auto', width:400, height:250}}>
            <ProForm
                layout="horizontal"
                formRef={formRef}
                onFinish={async (values) => {
                    console.log(values)
                    await creatAdmin(values);
                    message.success('创建成功')
                }}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormSelect
                    showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                    width="md"
                    name="types"
                    label={'申请类型'}
                    options={options}
                />
            </ProForm>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="普通账户创建" style={{width:400, height:250}}>
            <ProForm
                layout="horizontal"
                formRef={formRef}
                onFinish={async (values) => {
                    console.log(values)
                    await createAccount(values);
                    message.success('创建成功')
                }}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormText
                    width="md"
                    name="accountName"
                    label="账户名字"
                    placeholder="请输入账户名"
                />
                <ProFormSelect
                    showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                    width="md"
                    name="types"
                    label={'申请类型'}
                    options={options}
                />
            </ProForm>
          </Card>
        </Col>
      </Row>
      
      <Card title="代币发行" style={{marginTop:30,}}>
            <ProForm
                layout="horizontal"
                formRef={formRef}
                onFinish={async (values) => {
                    console.log(values)
                    await initCurrency(values);
                    message.success('发现代币成功！')
                }}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProForm.Group>
                  <ProFormText
                      width="md"
                      name="tokenName"
                      label="代币名称"
                      placeholder="请输入代币名称"
                  />
                  <ProFormSelect
                      showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                      width="md"
                      name="types"
                      label={'申请类型'}
                      options={options}
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormText
                      width="md"
                      name="symbol"
                      label="代币简称"
                      placeholder="请输入代币简称"
                  />
                  <ProFormText
                      width="md"
                      name="supply"
                      label="代币数量"
                      placeholder="请输入代币数量"
                  />
                </ProForm.Group>
                <ProForm.Group>
                  <ProFormSelect
                      showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                      width="md"
                      name="lock"
                      label={'是否锁仓'}
                      options={options2}
                  />
                </ProForm.Group>
            </ProForm>
          </Card>

        
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}

export default Index;