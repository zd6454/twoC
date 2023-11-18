import React from "react";
import { Button, message } from 'antd';
import {
    ModalForm,
    ProForm,
    ProFormUploadButton,
    ProFormSelect,
    ProFormText,
  } from '@ant-design/pro-components';
  import { PlusOutlined } from '@ant-design/icons';

const Index=(props)=>{
  const {form,visual ,actionRef, type ,setVisual}= props
  const item1 =()=><div>
      <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />

        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
        <ProFormUploadButton
                    label='上传大型文件'
                    width="md"
                    name="img"
                    max={1}
                    icon={<PlusOutlined />}
                />
  </div>

   const preItem={
    '1':item1(),
    '2':item1(),
    '3':item1(),
   }

    return <ModalForm
    title="新建表单"
    form={form}
    actionRef={actionRef}
    open={visual}
    autoFocusFirstInput
    modalProps={{
      destroyOnClose: true,
      onCancel: () => console.log('run'),
    }}
    onOpenChange={(e)=>{
       setVisual(e)
    }}
    submitTimeout={2000}
    onFinish={async (values) => {
      await waitTime(2000);
      console.log(values.name);
      message.success('提交成功');
      return true;
    }}
    >
        {preItem[type]}
    </ModalForm>
}

export default Index