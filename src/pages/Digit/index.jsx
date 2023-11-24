
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm,ProFormDatePicker, ProFormText,ProFormUploadButton,ProFormTextArea} from '@ant-design/pro-components';
import {Button,Card,Row,Col, Space,message} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import{create,register,querAll,querPkBySk,querVideoAll,querVideoByHash,querVideoByType, uploadFile} from './serves'
import los from '../Asserts/logo.png'
import JMenu from '../components/JMenu'
import ZTable from '../components/ZTable'
import ZModal from './ZModal'
import token from  '../../utils/currentToken';
import {type as Ztype} from './enum'

const Index=()=>{
    const formRef1 = useRef()
    const formRef2 = useRef()
    const actionRef = useRef()
    const modelRef = useRef()
    const [flag,setFlag] = useState('4')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelType, setModelType] = useState('1');
    const [searchInfo,setSearch] = useState({})
    const [pk,setPk] = useState('')
    const [videos,setVideos] = useState(null)

    const steps={
        [Ztype.CreatPk]:'创建公私钥对',
        [Ztype.Register]:'注册用户',
        [Ztype.SkToPk]:'私钥转公钥',
        [Ztype.PkGetSk]:'查询公私钥',
        [Ztype.VideoAll]:'私钥查询',
        [Ztype.VideoByHash]:'hash查询',
        [Ztype.VideoByType]:'组织查询',
    }
   const queryMethod={
    [Ztype.CreatPk]:create,
    [Ztype.Register]:register,
    [Ztype.SkToPk]:querPkBySk,
    [Ztype.PkGetSk]:null,
     //视频查询
     [Ztype.VideoAll]:querVideoAll,
     [Ztype.VideoByHash]:querVideoByHash,
     [Ztype.VideoByType]:querVideoByType,
   }

    //文件提交函数，点击按钮触发该事件
    const onfinish=async(values)=>{
      values.types= token.getStore('type')
      values.file = values.file[0].originFileObj
      console.log(values,'123',formRef2)
       const end = await uploadFile(values)
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
            hideInSearch:true,
        },
        {
            title:'公钥',
            dataIndex: 'PK',
            valueType:'textarea',
            copyable:true,
            ellipsis:true
        },
        {
          title:'私钥',
          dataIndex: 'SK',
          copyable:true,
          hideInSearch:true,
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
    const Account=(<div>
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
        </div>)
    //弹窗子组件
    const modelItem={
      [Ztype.CreatPk]:Account,
      [Ztype.Register]:<div>
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
       [Ztype.SkToPk]:<div>
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
        <div>公钥：{pk}</div>
       </div>,
      [Ztype.PkGetSk]:Account,

      [Ztype.VideoAll]: <ProFormTextArea 
                name="sk"
                placeholder={'请输入私钥'}
                rules={[
                {
                    required: true,
                    message:'请输入私钥',
                },
                ]}
            /> ,
      [Ztype.VideoByHash]:<ProFormText
                  name="hash"
                  placeholder={'请输入hash'}
                  rules={[
                    {
                      required: true,
                      message:'请输入hash',
                    },
                  ]}
                />,
      [Ztype.VideoByType]:<ProFormText
                  name="type"
                  placeholder={'请输入组织'}
                  rules={[
                    {
                      required: true,
                      message:'请输入组织',
                    },
                  ]}
                />,
    }
    const toolBar=() => [
        <Button
          type="primary"
          key="primary"
          onClick={()=>{
            setIsModalOpen(true)
            setModelType(Ztype.CreatPk)
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
            setModelType(Ztype.Register)
            modelRef?.current?.resetFields()
         }}
       >
         <PlusOutlined /> {'注册用户'}
       </Button>,
        <Button
          type="primary"
          key="primary"
           onClick={()=>{
            setIsModalOpen(true)
            setModelType(Ztype.SkToPk)
            modelRef?.current?.resetFields()
            setPk('')
           }}
        >
               <PlusOutlined /> {'私钥转公钥'}
        </Button>,
         <Button
         type="primary"
         key="primary"
         onClick={()=>{
            setIsModalOpen(true)
            setModelType(Ztype.PkGetSk)
            modelRef?.current?.resetFields()
         }}
       >
         <PlusOutlined /> {'私钥查询'}
  </Button>,
      
      ]
    const rule=async(params)=>{
        const end = await querAll(searchInfo)
        return{ data:end}
      }

      //复制到粘贴板
    const copyMethod=(value)=>{
      const textareaEle = document.createElement("textarea");
      textareaEle.value = value;
      document.body.appendChild(textareaEle);
      textareaEle.select();
      document.execCommand('copy')
      document.body.removeChild(textareaEle);
                
    }
    //处理1弹窗信息
    const handleEle1=(end)=>{
        if(end.message){
            message.error(end.message)
           }else{
            copyMethod(end.pk)
            message.success('创建成功，公钥已复制到粘贴板')
            setIsModalOpen(false)
            modelRef?.current?.resetFields()
           }
    }
    //处理函数
    const handleOk=async(values)=>{
      values.types= token.getStore('type')
      if(modelType==Ztype.CreatPk){
       const end = await queryMethod[modelType](values)
        handleEle1(end)
      }else if(modelType==Ztype.Register){
         const end = await queryMethod[modelType](values)

      }else if(modelType==Ztype.SkToPk){
        const end = await queryMethod[modelType](values)
        setPk(end)
      } else if(modelType==Ztype.PkGetSk){
        setSearch(values)
        actionRef.current.reload()
        setIsModalOpen(false)
      }else if(modelType==Ztype.VideoAll){
        const end = await queryMethod[modelType](values)
        setVideos(end)
        setIsModalOpen(false)
      }else if(modelType==Ztype.VideoByHash){
        const end = await queryMethod[modelType](values)
        setVideos(end)
        setIsModalOpen(false)
      }else if(modelType==Ztype.VideoByType){
        values.types= values.type
        const end = await queryMethod[modelType](values)
        setVideos(end)
        setIsModalOpen(false)
      }
    }

  const handleCheck=(type)=>{
    setIsModalOpen(true)
    setModelType(type)
    modelRef?.current?.resetFields()
  }
  // console.log(formRef2)
    return <PageContainer
    content={'中间为三个并排的card，左边的card是文字存证，用户输入“作品名称”、“创作者”、“创作日期”，可产生对应hash值；同理，中间card是中型文件存储，产生hash和IPFS；右边card是大型文件存储，上传文件后，产生hash和HDFS。下边是效果展示，对上传的数据上面加一个湖南大学的章。'}
    >
        <Card title={'文件存储'} style={{marginBottom:20}} extra={
          <Space>
            <Button onClick={()=>formRef2?.current?.resetFields()}>重置</Button>
            <Button type="primary" onClick={()=>formRef2?.current?.submit()}>提交</Button>
          </Space>
        }>
           <ProForm
                layout="inline"
                formRef={formRef2}
                onFinish={onfinish}
                submitter={false}
            >
                <ProFormTextArea 
                    name="sk"
                    placeholder={'请输入私钥'}
                    width={'lg'}
                    rules={[
                    {
                        required: true,
                        message:'请输入私钥',
                    },
                    ]}
                /> 
                <ProFormUploadButton
                    label='上传视频文件'
                    width="md"
                    onChange={(e)=>{console.log(e,'change')}}
                    name="file"
                    rules={[
                      {
                          required: true,
                          message:'请上传文件',
                      },
                      ]}
                    max={1}
                    icon={<PlusOutlined />}
                />
            </ProForm>  
        </Card>
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
      <Card title={'效果展示'} style={{width:'100%',marginTop:20}}  extra={
        <Space>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoAll)} >私钥查询</Button>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoByHash)}>hash查询</Button>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoByType)}>组织查询</Button>
        </Space>
      }>
        <Row gutter={[16, 16]}>
          <Col span={12}>
          <Card title={'视频展示'} style={{width:500}} extra={<Space>
                  <Button >获取IPFS下载路径</Button>
                  <Button >复制hash</Button>
               </Space>}>
            <video  loop  controls = {true}  style={{width:'100%',}} >
                    <source type='video/mp4' src={''}  />
            </video>
          </Card>
          </Col>
          {videos?.map((item)=>{
            return <Col span={12}>
                      <Card title={'视频展示'} style={{width:500}} extra={<Space>
                              <Button >获取IPFS下载路径</Button>
                              <Button >复制hash</Button>
                          </Space>}>
                            <video  loop  controls = {true}  style={{width:'100%',}} >
                                    <source type='video/mp4' src={item.src}  />
                            </video>
                      </Card>
                </Col>
          })}
        </Row>
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