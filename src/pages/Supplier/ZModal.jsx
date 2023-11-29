import React from "react";
import { Modal } from "antd";
import { ProForm} from '@ant-design/pro-components';
const Index=( props)=>{
    const {title='default',formRef,isModalOpen,setIsModalOpen,handleOk,modeItem,checkType}=props;
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return <Modal
       title={title}
       open={isModalOpen} 
       width={checkType=='11'?800:400}
       onOk={()=>formRef.current.submit()} 
       onCancel={handleCancel
    }
      >
     <ProForm
                layout="horizontal"
                formRef={formRef}
                onFinish={handleOk}
                submitter={false}
     >
          {modeItem}
     </ProForm>
    </Modal>
}

export default Index;