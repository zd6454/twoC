
import React,{useEffect,useState,useRef} from "react";
import { PageContainer,ProForm, ProFormText,ProFormUploadButton} from '@ant-design/pro-components';
import ZTable from '../components/ZTable'
import {Button,Space,Card,message, Upload,Form} from 'antd'
import {querAll, queryAllNetwork,deleteNetwork,clearAllDocker} from './serves'
import { PlusOutlined,UploadOutlined} from '@ant-design/icons';
import {history} from 'umi';
import JModel from './JModel'

const Index=()=>{
    const actionRef1 = useRef()
    const actionRef2 = useRef()
    const actionRef3 = useRef()
    const actionRef4 = useRef()
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [param1,setParam1] =useState({}) 
    const [visual,setVisual] = useState(false)
    const [type ,setType] = useState('') 
    const formRef = useRef()
    const content = (
        <Space>
            <a style={{color:'green'}}>通过</a>
            <a style={{color:'red'}}>拒绝</a>
        </Space>
    );

    const allNetwork=[
      {
        title: 'networkname',
        dataIndex: 'networkname',
        hideInSearch: false,
        valueType: 'text',
      },
      {
        title: 'channelname',
        dataIndex: 'channelname',
        hideInSearch: true,
      },
      {
        title:'操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) => [  //record是你点击那条的数据内容
          <a key="delete" onClick={()=> {
            alert("删除此网络成功！")
            deleteNetwork(record)
          }} >
            删除
          </a>,
        ],
      },
  ]
    
    //orger记录属性
    const columns1=[
        {
          title: 'Name',
          dataIndex: 'Name',
          hideInSearch: true,
        },
        {
          title: 'Domain',
          dataIndex: 'Domain',
          hideInSearch: false,
          valueType: 'text',
        },
        {
          title:'PeerCount',
          dataIndex: 'PeerCount',
          hideInSearch: false,
          hideInForm: true,
        },
        {
          title:'UserCount',
          dataIndex: 'UserCount',
          hideInSearch: true,
        },
        {
          title:'OrgAnchorFile',
          dataIndex: 'OrgAnchorFile',
          hideInSearch: true,
        },
        {
          title:'RequestBodyID',
          dataIndex: 'RequestBodyID',
          hideInSearch: true,
        },
        {
          title:'操作',
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [  //record是你点击那条的数据内容
            // <a key="update" onClick={()=>
            // {
            //   setVisual(true)
            //   setType('1')
            // }
            // } >
            //   增加
            // </a>,
            <a key="add" onClick={()=>{
              console.log(param1,"param1");
              console.log(record,'record');
            }} >
              增加
            </a>,
            // <a key="update" onClick={()=>{
            //   console.log(record,'record')
            //   setVisual(true)
            //   setType('1')
            //   form.setFieldsValue({
            //     'name':123
            //   })
            // }} >
            //   修改
            // </a>,
            <a key="delete" onClick={()=> null} >
              删除
            </a>,
          ],
        },
    ]

    // chain记录属性
    const columns2=[
        {
          title: 'Name',
          dataIndex: 'name',
          hideInSearch: true,
        },
        {
          title: 'ChaincodeId',
          dataIndex: 'chaincodeId',
          hideInSearch: false,
          valueType: 'text',
        },
        {
          title:'ChaincodeVersion',
          dataIndex: 'chaincodeVersion',
          hideInSearch: false,
          hideInForm: true,
        },
        {
          title:'RequestBodyID',
          dataIndex: 'RequestBodyID',
          hideInSearch: true,
        },
        {
          title:'操作',
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <a key="update" onClick={()=>false} >
              增加
            </a>,
            <a key="create" onClick={()=>false} >
              部署
            </a>,
            <a key="delete" onClick={()=> null} >
              删除
            </a>,
          ],
        },
    ]

    // docker记录属性
    const columns3=[
        {
          title: 'ID',
          dataIndex: 'ID',
          hideInSearch: true,
        },
        {
          title: 'Container',
          dataIndex: 'Container',
          hideInSearch: false,
          valueType: 'text',
        },
        {
          title:'Port',
          dataIndex: 'Port',
          hideInSearch: false,
          hideInForm: true,
        },
        {
          title:'NetworkName',
          dataIndex: 'NetworkName',
          hideInSearch: true,
        },
        {
          title:'ChannelName',
          dataIndex: 'ChannelName',
          hideInSearch: true,
        },
        {
          title:'NetworkState',
          dataIndex: 'NetworkState',
          hideInSearch: true,
        },
        {
          title:'CreatedAt',
          dataIndex: 'CreatedAt',
          hideInSearch: true,
        },
        {
          title:'DestroyedAt',
          dataIndex: 'DestroyedAt',
          hideInSearch: true,
        },
        {
          title:'操作',
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <a key="update" onClick={()=>false} >
              增加
            </a>,
            <a key="create" onClick={()=>false} >
              部署
            </a>,
            <a key="delete" onClick={()=> null} >
              删除
            </a>,
          ],
        },
    ]
    

    const handleClick=()=>{
        history.push('/Opera/Create')
    }
    const handleClick2=()=>{
        alert("删除所有网络")
        // deleteAllNetwork()
    }
    const handleClick3=()=>{
        history.push('/Opera/Create')
    }
    const handleClick4=()=>{
        
    }
    const handleClick5=()=>{
        
    }
    const handleClick6=()=>{
      clearAllDocker()
    }


    const toolBar=() => [
      <Button
          type = "primary"
          key = "primary"
          onClick = {handleClick}
      > 
      <PlusOutlined /> {'新建'}
      </Button>,
      <Button
          onClick = {handleClick2}
      > 
      {'删除'}
      </Button>,
    ]
    
    // 针对orger的操作
    const toolBar1=() => [
      <Button
          type = "primary"
          key = "primary"
          onClick = {handleClick3}
      > 
      <PlusOutlined /> {'新建'}
      </Button>,
      // <Button
      //     onClick = {handleClick4}
      // > 
      // {'暂停'}
      // </Button>,
      // <Button
      //     onClick = {handleClick5}
      // > 
      // {'重启'}
      // </Button>,
    ]

    // 针对docker
    const toolBar3=() => [
      <Button
          onClick = {handleClick6}
      > 
      {'清理'}
      </Button>,
    ]
    
    
    // 所有网络数据获取
    const ruleAll = async() => {
      const end = await queryAllNetwork()
     
      if(end){
          return{ data: end }
      }
    }

      // orger数据获取
      const rule1 = async(param) => {
        if(param1){
          const end = await querAll(param1)
         
          if(end.networkData){
              return{ data: end.networkData.Organizations }
          }
        }
      }

      // chain数据获取
      const rule2 = async(param) => {
        if(param1){
          const end = await querAll(param1)
          // console.log(end,'end')
          if(end.networkData){
              return{ data: end.networkData.ChannelOrganizations }
          }
          else{
              return{ 
                data:[{
                    name: "bank1",
                    chaincodeId: "",
                    chaincodeVersion: "",
                    RequestBodyID: 1
                }]
              }
          }
        }
      }

      // docker数据获取
      const rule3 = async(param) => {
        if(param1){
          const end = await querAll(param1)
          // console.log(end,'end')
          if(end.networkStatusData){
              return{ data: end.networkStatusData }
          }
          else{
              return{ 
                data:[{
                    ID: 1,
                    Container: "couchdb0.bank1.hnu1.com",
                    Port: "20000:5984",
                    NetworkName: "fedratelearning",
                    ChannelName: "gradient",
                    NetworkState: "ok",
                    CreatedAt: "2023-11-12T10:06:06Z",
                    DestroyedAt: null
                }]
              }
          }
        }
      }

      const handleChange = (info) => {
          let newFileList = [...info.fileList];
          newFileList = newFileList.slice(-2);
          newFileList = newFileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
          });
          setFileList(newFileList);
          console.log(newFileList,'newfile')
      };

      const props = {
          onChange: handleChange,
          multiple: true,
      };
     
    return <PageContainer>
        <ZTable
            title={'所有网络'}
            // actionRef={}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={allNetwork}
            toolBar={toolBar}
            rule={ruleAll}
            search={false}
            rowkey = 'paperId'
        />
        <Card style={{marginBottom:20}}> 
          <Space>
              <ProForm 
                  layout={'horizontal'}
                  formRef={formRef}
                  submitter={false}
                  onFinish={async (values) => {
                      setParam1(values)
                      // 重新调用rule方法
                      actionRef1.current.reload()
                      actionRef2.current.reload()
                      actionRef3.current.reload()
                      message.success('提交成功');
                  }}
              >
                  <Space>
                      <ProFormText
                            width="md"
                            name="network"
                            label="网络"
                            placeholder="网络"
                        />
                        <ProFormText
                            width="md"
                            name="channel"
                            label="通道"
                            placeholder="通道"
                        />
                  <Button type="primary" onClick={()=>formRef.current.submit()} style={{marginBottom:20}}>查询</Button>
                  </Space>
              </ProForm>
              <div style={{position:'relative',right:-220,top:0}}>
                  <Upload 
                  {...props}
                  fileList={fileList}>
                      <Button icon={<UploadOutlined />}>点击上传文件</Button>
                  </Upload>
              </div>
          </Space>
        </Card>
        <ZTable
            title={'orger'}
            actionRef={actionRef1}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={columns1}
            toolBar={toolBar1}
            rule={rule1}
            search={false}
            rowkey = 'paperId'
        />
        <ZTable
            title={'chain'}
            actionRef={actionRef2}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={columns2}
            toolBar={null}
            rule={rule2}
            search={false}
            rowkey = 'paperId'
        />
        <ZTable
            title={'docker'}
            actionRef={actionRef3}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={columns3}
            toolBar={toolBar3}
            rule={rule3}
            search={false}
            rowkey = 'paperId'
        />
        <JModel 
          visual={visual}  //传递参数
          setVisual={setVisual}
          type={type}
          form={form}
        />
    </PageContainer>
}
export default Index