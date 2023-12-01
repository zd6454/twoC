import React,{useRef} from "react";
import { PageContainer, ProForm, ProFormText,ProFormDatePicker} from '@ant-design/pro-components';
import {Button, Card, Space,message} from 'antd'
import {create} from './serves'
import token from '../../utils/currentToken'

const Index=()=>{
    
    const formRef = useRef()

    const handleOk=async(values)=>{
        values.types= token.getStore('type')
        const end = await create(values)
        if(end['发行票据状态']=='成功'){
            message.success('创建成功')
        }else{
            message.error('创建失败，请检查输入格式')
        }
    }
    return <PageContainer>
        <Card>
        <ProForm
          layout=""
          formRef={formRef}
          onFinish={handleOk}
          submitter={false}
         >
        <ProForm.Group>
        <ProFormText 
                    name="BillInfoID"
                    placeholder={'请输入票据号码'}
                    label='票据号码'
                    width={'md'}
                    rules={[{required: true, message:'请输入票据号码',},]}
                /> 
           <ProFormText 
                    name="BillInfoAmt"
                    placeholder={'请输入票据金额'}
                    label='票据金额'
                    width={'md'}
                    rules={[{required: true, message:'请输入票据金额',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText 
                    name="BillInfoType"
                    placeholder={'请输入票据类型'}
                    label='票据类型'
                    width={'md'}
                    rules={[{required: true, message:'请输入票据类型',},]}
                /> 
            <ProFormDatePicker 
                    name="BillInfoIsseDate"
                    placeholder={'请输入票据出票日期'}
                    label='票据出票日期'
                    width={'md'}
                    rules={[{required: true, message:'请输入票据出票日期',},]}
                />
        </ProForm.Group>
        <ProForm.Group>
            <ProFormDatePicker 
                    name="BillInfoDueDate"
                    placeholder={'请输入票据到期日期'}
                    label='票据到期日期'
                    width={'md'}
                    rules={[{required: true, message:'请输入票据到期日期',},]}
                /> 
           <ProFormText 
                    name="DrwrCmID"
                    placeholder={'请输入出票人证件号码'}
                    label='出票人证件号码'
                    width={'md'}
                    rules={[{required: true, message:'请输入出票人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
         <ProFormText 
                    name="DrwrAcct"
                    placeholder={'请输入出票人名称'}
                    label='出票人名称'
                    width={'md'}
                    rules={[{required: true, message:'请输入出票人名称',},]}
                /> 
           <ProFormText 
                    name="AccptrCmID"
                    placeholder={'请输入承兑人证件号码'}
                    label='承兑人证件号码'
                    width={'md'}
                    rules={[{required: true, message:'请输入承兑人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
            <ProFormText 
                    name="AccptrAcct"
                    placeholder={'请输入承兑人名称'}
                    label='承兑人名称'
                    width={'md'}
                    rules={[{required: true, message:'请输入承兑人名称',},]}
                /> 
           <ProFormText 
                    name="PyeeCmID"
                    placeholder={'请输入收款人证件号码'}
                    label='收款人证件号码'
                    width={'md'}
                    rules={[{required: true, message:'请输入收款人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
             <ProFormText 
                    name="PyeeAcct"
                    placeholder={'请输入收款人名称'}
                    label='收款人名称'
                    width={'md'}
                    rules={[{required: true, message:'请输入收款人名称',},]}
                /> 
           <ProFormText 
                    name="HoldrCmID"
                    placeholder={'请输入当前持票人证件号码'}
                    label='当前持票人证件号码'
                    width={'md'}
                    rules={[{required: true, message:'请输入当前持票人证件号码',},]}
                />
        </ProForm.Group>
        <ProForm.Group>
            <ProFormText 
                    name="HoldrAcct"
                    placeholder={'请输入当前持票人名称'}
                    label='当前持票人名称'
                    width={'md'}
                    rules={[{required: true, message:'请输入当前持票人名称',},]}
                /> 
        </ProForm.Group>
        <Space style={{marginRight:200,float:'right'}}>
                <Button onClick={()=>formRef.current.resetFields()}>重置</Button>
                <Button type="primary" onClick={()=>formRef.current.submit()}>确认</Button>
            </Space>
         </ProForm>
        </Card>
         

    </PageContainer>

}

export default Index;