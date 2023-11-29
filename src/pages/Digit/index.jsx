
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm,ProFormSelect, ProFormText,ProFormUploadButton,ProFormTextArea} from '@ant-design/pro-components';
import {Button,Card,Row,Col, Space,message} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import{create,register,querAll,querPkBySk,querVideoAll,querVideoByHash,querVideoByType, uploadFile,querAccountByPk,downloadFile} from './serves'
import los from '../Asserts/logo.png'
import JMenu from '../components/JMenu'
import ZTable from '../components/ZTable'
import ZModal from './ZModal'
import token from  '../../utils/currentToken';
import {type as Ztype, desc} from './enum'

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
    const [byaccount,setAccount] = useState('')
    const [videoUrl,setVideoUrl] = useState('')

    const steps={
        [Ztype.CreatPk]:'创建公私钥对',
        [Ztype.Register]:'注册用户',
        [Ztype.SkToPk]:'私钥转公钥',
        [Ztype.PkGetSk]:'查询公私钥',
        [Ztype.PkFindAccount]:'公钥查用户',
        [Ztype.VideoAll]:'私钥查询',
        [Ztype.VideoByHash]:'hash查询',
        [Ztype.VideoByType]:'组织查询',
    }
   const queryMethod={
    [Ztype.CreatPk]:create,
    [Ztype.Register]:register,
    [Ztype.SkToPk]:querPkBySk,
    [Ztype.PkGetSk]:null,
    [Ztype.PkFindAccount]:querAccountByPk,
     //视频查询
     [Ztype.VideoAll]:querVideoAll,
     [Ztype.VideoByHash]:querVideoByHash,
     [Ztype.VideoByType]:querVideoByType,
   }

    //文件提交函数，点击按钮触发该事件
    const onfinish=async(values)=>{
      values.file = values.file[0].originFileObj
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
    const typeSelect=(
     <ProFormSelect 
      name="types"
      placeholder={'请选择账户类型'}
      rules={[
        {
          required: true,
          message:'请选择账户类型',
        },
      ]}
      options={[ 'author1','author2','alibaba','baidu','tencent','jingdong'
      ]}
     />
    )
    const VideoItem=(
      <video  loop  controls = {true}  style={{width:'100%',}} >
          <source type='video/mp4' src={videoUrl}  />
      </video>
    )
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
              {typeSelect}
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
      [Ztype.PkFindAccount]:<div>
          <ProFormTextArea 
                name="pk"
                placeholder={'请输入公钥'}
                rules={[
                {
                    required: true,
                    message:'请输入公钥',
                },
                ]}
            />
                {typeSelect}
              <div>账号名：{byaccount}</div>
      </div>,
      [Ztype.VideoAll]:<div>
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
          {typeSelect}
      </div>  ,
      [Ztype.VideoByHash]:<div>
          <ProFormText
                  name="hash"
                  placeholder={'请输入hash'}
                  rules={[
                    {
                      required: true,
                      message:'请输入hash',
                    },
                  ]}
                />
                {typeSelect}
        </div>,
      [Ztype.VideoByType]:typeSelect,
      [Ztype.VideoCheck] :VideoItem,
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
        <Button
        type="primary"
        key="primary"
        onClick={()=>{
           setIsModalOpen(true)
           setModelType(Ztype.PkFindAccount)
           modelRef?.current?.resetFields()
           setAccount('')
        }}
      >
        {'公钥查询用户'}
      </Button>,
      ]
    const rule=async(params)=>{
        const end = await querAll(searchInfo)
        let data={};
        if(modelType==Ztype.PkGetSk){
           data.data=end.message,
           data.total=end.nrows
        }else{
          data.data=end;
        }
        return data
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
            copyMethod(end.sk)
            message.success('创建成功，私钥已复制到粘贴板')
            setIsModalOpen(false)
            modelRef?.current?.resetFields()
           }
    }
    //处理函数
    const handleOk=async(values)=>{
      if(modelType==Ztype.CreatPk){
        values.types= token.getStore('type')
       const end = await queryMethod[modelType](values)
        handleEle1(end)
      }else if(modelType==Ztype.Register){
         const end = await queryMethod[modelType](values)
         if(end.userName){
          message.success('注册成功')
          setIsModalOpen(false)
         }else{
          message.warning('注册出现问题，请查看')
         }
      }else if(modelType==Ztype.SkToPk){
        const end = await queryMethod[modelType](values)
        setPk(end)
      } else if(modelType==Ztype.PkGetSk){
        setSearch(values)
        actionRef.current.reload()
        setIsModalOpen(false)
      } else if(modelType==Ztype.PkFindAccount){
        const end = await queryMethod[modelType](values)
        if(end){
          setAccount(end)
        }else{
          setAccount('没有查询到，请确保公钥及组织正确')
        }

      }else if(modelType==Ztype.VideoAll){
        const end = await queryMethod[modelType](values)
        setVideos(end)
        setIsModalOpen(false)
      }else if(modelType==Ztype.VideoByHash){
        const end = await queryMethod[modelType](values)
        setVideos([end])
        setIsModalOpen(false)
      }else if(modelType==Ztype.VideoByType){
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
    content={desc}
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
                {typeSelect}
            </ProForm>  
        </Card>
      <ZTable
           title={'查询信息'}
           actionRef={actionRef}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           toolBar={toolBar}
           rule={rule}
           search={false}
           rowkey = 'ID'
        />
      <Card title={'效果展示'} style={{width:'100%',marginTop:20}}  extra={
        <Space>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoAll)} >私钥查询视频</Button>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoByHash)}>hash查询</Button>
          <Button type="primary" onClick={()=>handleCheck(Ztype.VideoByType)}>组织查询</Button>
        </Space>
      }>
        <Row gutter={[16, 16]}>
          {videos?.map((item,index)=>{
            return <Col span={12} key={index}>
                      <Card key={index} title={item.videoName} style={{width:500}} extra={<Space>
                              <Button onClick={async()=>{
                                 const end =await downloadFile({filename:item.videoName})
                                //  videos[index].url=end;
                                 const videoURL = new File([end],'file', {type: 'video/mp4' });;
                                 const blob = new Blob([end], {type: 'video/mp4'});
                                 console.log(videoURL,'videoURL',blob,end)
                                  setVideoUrl(end)
                                  setModelType(Ztype.VideoCheck)
                                  setIsModalOpen(true)
                              }}>播放视频</Button>
                              <Button onClick={()=>{
                                 copyMethod(item.txid)
                                 message.success('下载路径已复制在粘贴板')
                              }}>获取IPFS下载路径</Button>
                              <Button onClick={()=>{
                                copyMethod(item.videoCID)
                                message.success('hash已复制在粘贴板')
                              }}>复制hash</Button>
                          </Space>}>
                            <div>
                              发布时间：{item.timestamp}
                            </div>
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