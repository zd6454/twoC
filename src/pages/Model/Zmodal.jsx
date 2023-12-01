import React from "react";
import { Modal,Tag,message } from "antd";

const Index=(props)=>{
   const {title='信息展示',info,isModalOpen,setOpen} = props
   console.log(info,'info')
   const handleCancel=()=>{
    setOpen(false)
   }
   const handleCopy=()=>{
    const textareaEle = document.createElement("textarea");
    textareaEle.value = info;
    document.body.appendChild(textareaEle);
    textareaEle.select();
    document.execCommand('copy')
    document.body.removeChild(textareaEle);
    message.success('已成功复制到粘贴板')
  }
   const status={
    1:'success',
    2:'processing',
    3:'error',
    4:'warning',
    5:'default',
    6:'success',
    7:'processing',
    8:'error',
    9:'warning',
    10:'default',
   }
   return <Modal
   title={title}
   width={800}
   open={isModalOpen} 
   okText='复制'
   onOk={handleCopy} 
   onCancel={handleCancel}
   >
    {info}
   {/* {info?.split(';').map((item,index)=><Tag color={status[(index+1)%10]}>{item}</Tag>)} */}
   </Modal>
}

export default Index;