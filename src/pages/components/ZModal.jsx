import { ModalForm,ProFormText,ProFormTextArea, ProFormUploadButton } from '@ant-design/pro-components';
import React,{useState} from 'react';

const Index=(props)=>{
    const {formRef,modalType,createModalOpen,handleModalOpen,handleFinish, createItem}=props;
    const title = modalType==='create'?'创建':'修改';
    return <div>
        <ModalForm
          title={title}
          formRef={formRef}
          width="400px"
          open={createModalOpen}
          onOpenChange={handleModalOpen}
          onFinish={handleFinish}
      >
        {/* <ProFormText
          rules={[
            {
              required: true,
              message: '请输入题库名称'
            },
          ]}
          label='题库名称'
          width="md"
          name="title"
        />
        <ProFormTextArea label='题库描述' width="md" name="introduction" /> */}
        {createItem()}
      </ModalForm>
    </div>
}
export default Index;