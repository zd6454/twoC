
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm,ProFormDatePicker, ProFormText,ProFormUploadButton,ProFormTextArea} from '@ant-design/pro-components';
import {Button,Card,Row,Col, Space,message} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import{create,register,querAll} from './serves'
import los from '../Asserts/logo.png'
import JMenu from '../components/JMenu'
import ZTable from '../components/ZTable'
import ZModal from './ZModal'
import token from  '../../utils/currentToken';

const Index=()=>{
    const formRef1 = useRef()
    const formRef2 = useRef()
    const formRef3 = useRef()
    const actionRef = useRef()
    const modelRef = useRef()
    const [flag,setFlag] = useState('4')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelType, setModelType] = useState('1');
    const [searchInfo,setSearch] = useState({})

    const steps={
        '1':'创建公私钥对',
        '2':'注册用户',
        '3':'私钥转公钥',
        '4':'查询公私钥'
    }
   const queryMethod={
    '1':create,
    '2':register
   }
    //提交函数，点击按钮触发该事件
    const onfinish=(type,values)=>{
      console.log(values,'123')
    }
    const handleClick=()=>{
        history.push('/co2/create')
    }
    const columns=[
        {
            title: 'id',
            dataIndex: 'ID',
            hideInSearch:true,
        },
        {
            title: '用户名',
            dataIndex: 'UserName',
            valueType: 'text',
        },
        {
            title:'公钥',
            dataIndex: 'PK',
            copyable:true,
            ellipsis:true
        },
        {
          title:'私钥',
          dataIndex: 'SK',
          copyable:true,
          ellipsis:true
        //   hideInForm: true,
       },
        {
          title: '创建时间',
          dataIndex: 'startDate',
          valueType: 'text',
          hideInSearch:true,
      },
        {
            title:'操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
              <a key="update" onClick={()=>false} >
              查询文件
              </a>,
            //    <a key="update" onClick={()=>false} >
            //     <Popover content={content} >
            //       审核
            //     </Popover>
            //    </a>,
            //   <a key="delete" onClick={()=> null} >
            //     删除
            //   </a>,
            ],
          },
    ]

    const modelItem={
        '1':<div>
            <ProFormText
                name="userName"
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message:'请输入用户名',
                  },
                ]}
              />
               <ProFormText.Password
                name="passWord"
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              />
        </div>,
       '2':<div>
        <ProFormTextArea 
            name="sk"
            placeholder={'请输入私钥'}
            rules={[
            {
                required: true,
                message:'请输入私钥',
            },
            ]}
        />
           <ProFormText
                name="userName"
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message:'请输入用户名',
                  },
                ]}
              />
       </div>,
       '3':<div>

       </div>
    }
    const toolBar=() => [
        <Button
          type="primary"
          key="primary"
          onClick={()=>{
            setIsModalOpen(true)
            setModelType('1')
            modelRef?.current?.resetFields()
        }}
        >
          <PlusOutlined /> {'创建公私钥对'}
        </Button>,
         <Button
         type="primary"
         key="primary"
         onClick={()=>{
            setIsModalOpen(true)
            setModelType('2')
            modelRef?.current?.resetFields()
         }}
       >
         <PlusOutlined /> {'注册用户'}
       </Button>,
        <Button
               type="primary"
               key="primary"
               onClick={handleClick}
             >
               <PlusOutlined /> {'私钥转公钥'}
        </Button>,
         <Button
         type="primary"
         key="primary"
         onClick={handleClick}
       >
         <PlusOutlined /> {'私钥查询'}
  </Button>,
      
      ]
    const rule=async(params)=>{
        console.log(params)
        const end = await querAll({
            userName:'zd1',
            passWord:'123456'
        })
        return{ data:end}
      }

    //处理1弹窗信息
    const handleEle1=(end)=>{
        if(end.message){
            message.error(end.message)
           }else{
            const textareaEle = document.createElement("textarea");
                textareaEle.value = end.pk;
                document.body.appendChild(textareaEle);
                textareaEle.select();
                document.execCommand('copy')
                document.body.removeChild(textareaEle);
                message.success('创建成功，公钥已复制到粘贴板')
                setIsModalOpen(false)
                modelRef?.current?.resetFields()
           }
    }
    //处理函数
    const handleOk=async(values)=>{
      values.types= token.getStore('type')
      const end = await queryMethod[modelType](values)
      if(modelType=='1'){
        handleEle1(end)
      }else if(modelType=='2'){

      }
      
  
    }
    return <PageContainer
    content={'中间为三个并排的card，左边的card是文字存证，用户输入“作品名称”、“创作者”、“创作日期”，可产生对应hash值；同理，中间card是中型文件存储，产生hash和IPFS；右边card是大型文件存储，上传文件后，产生hash和HDFS。下边是效果展示，对上传的数据上面加一个湖南大学的章。'}
    >
      <Space style={{marginBottom:20}}>
        <Card title={'文字存证'} style={{width:390,height:400}}>
            <ProForm
                layout="horizontal"
                formRef={formRef1}
                onFinish={(e)=>onfinish(1,e)}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormText
                    width="md"
                    name="name"
                    label="作品名称"
                    placeholder="请输入作品名称"
                />
                <ProFormText
                    width="md"
                    name="author"
                    label="创作者"
                    placeholder="请输入创作者"
                />
               <ProFormDatePicker 
                    width="md"
                    name="date"
                    label="创作日期"
                    placeholder="请选择创作日期"
               
               />
            </ProForm>

            <Space style={{marginTop:40}}>hash：{0}</Space>
        </Card>
        <Card title={'文件存储'} style={{width:390,height:400}}>
           <ProForm
                layout="horizontal"
                formRef={formRef2}
                onFinish={(e)=>onfinish(2,e)}
                submitter={false}
            >
                <ProFormUploadButton
                    label='上传视频文件'
                    width="md"
                    name="img"
                    max={1}
                    icon={<PlusOutlined />}
                />
            </ProForm>
            <div style={{display:'grid'}}>
                <Button type="primary" style={{marginBottom:20}}>下载文件</Button>
                <Button type="primary">获取IPFS下载路径</Button>
            </div>
           
            <div style={{marginTop:100,display:'grid'}}>
              <Space >hash：{0}</Space>
              <Space >IPFS：{0}</Space>
            </div>
            
        </Card>
        <Card title={'大型文件存储'} style={{width:390,height:400}}>
           <ProForm
                layout="horizontal"
                formRef={formRef3}
                onFinish={(e)=>onfinish(3,e)}
                submitter={{
                    render: (_, dom) => <div style={{float:'right'}}>{dom[1]}</div>,
                }}
            >
                <ProFormUploadButton
                    label='上传大型文件'
                    width="md"
                    name="img"
                    max={1}
                    icon={<PlusOutlined />}
                />
            </ProForm>
            <div style={{marginTop:100,display:'grid'}}>
              <Space >hash：{0}</Space>
              <Space >HDFS：{0}</Space>
            </div>
        </Card>
      </Space>
      <ZTable
           title={'查询信息'}
           actionRef={actionRef}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={toolBar}
           rule={rule}
           search={true}
           rowkey = 'ID'
        />
      <Card title={'效果展示'} style={{width:'100%',marginTop:20}}>
        <div></div>
        <div style={{float:'right'}}>
           <img  style={{width:128,height:128}} src={los}/>
        </div>
       
      </Card>
      <JMenu
        flag={flag}  //传递参数
      />
      <ZModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOk={handleOk}
        title={steps[modelType]}
        formRef={modelRef}
        modeItem={modelItem[modelType]}
      />
    </PageContainer>
}
export default Index