
import React,{useState,useRef} from "react";
import { PageContainer,ProForm, ProFormText,ProFormSelect} from '@ant-design/pro-components';
import {Button,Space,Card,message, Upload,Form} from 'antd'
import {showAllToken, showTokenUser, tokenHistory, userTokenHistory, setLock, frozenAccount, mintToken, burnToken} from './serves'
import ZTable from '../../components/ZTable'
import JMenu from '../../components/JMenu'
import token from '../../../utils/currentToken'
import ZModal from './ZModal'

const Index=()=>{
    const actionRef1 = useRef()
    const [param1,setParam1] =useState(null) 
    const [flag,setFlag] = useState('2')
    const formRef = useRef()
    const [createModalOpen,setModalOpen] = useState(false)
    const [checkType,setCheck] = useState('1')
    const [serchInfo,setSearch] = useState({})
    const [detail,setDetail] = useState([])

    const queryMethod = {
      '1':showAllToken,
      '2':showTokenUser,
      '3':tokenHistory,
      '4':userTokenHistory,
      '5':setLock,
      '6':frozenAccount,
      '7':mintToken,
      '8':burnToken,
    };

    // 单行信息
    const allToken = [
      {
        title: 'Lock',
        dataIndex: 'Lock',
        ellipsis:true,
        valueType: 'text',
        render:(_,row)=>{
          const lock = String(row.Lock)
          return lock
        }
      },
      {
        title: 'TokenName',
        dataIndex: 'TokenName',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: 'TokenSymbol',
        dataIndex: 'TokenSymbol',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: 'TotalSupply',
        dataIndex: 'TotalSupply',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: 'User',
        dataIndex: 'User',
        ellipsis:true,
        valueType: 'text',
        render:(_,row)=>{
          const name = Object.keys(row.User) 
          return name[0]
        }
      },
      {
        title: 'Record',
        // dataIndex: 'Record',
        ellipsis:true,
        valueType: 'text',
        render:(_,row)=>{
          return "详情见交易界面"
        }
      },
    ];

    // 针对不同操作按钮的不同弹窗
    const itemRender = {
      '5':<div>
         <ProFormText
            name="symbol"
            label='symbol'
            placeholder={'请输入symbol'}
            rules={[
              {
                required: true,
                message:'请输入symbol',
              },
            ]}
          />
      </div>,
      '6':<div>
         <ProFormText
            name="acountName"
            label='账户名'
            placeholder={'请输入账户名'}
            rules={[
              {
                required: true,
                message:'请输入账户名',
              },
            ]}
          />
      </div>,
      '7':<div>
         <ProFormText
            name="symbol"
            label='symbol'
            placeholder={'请输入symbol'}
            rules={[
              {
                required: true,
                message:'请输入symbol',
              },
            ]}
          />
          <ProFormText
            name="amount"
            label='amount'
            placeholder={'请输入增发量'}
            rules={[
              {
                required: true,
                message:'请输入增发量',
              },
            ]}
          />
      </div>,
      '8':<div>
         <ProFormText
            name="symbol"
            label='symbol'
            placeholder={'请输入symbol'}
            rules={[
              {
                required: true,
                message:'请输入symbol',
              },
            ]}
          />
          <ProFormText
            name="amount"
            label='amount'
            placeholder={'请输入减少量'}
            rules={[
              {
                required: true,
                message:'请输入减少量',
              },
            ]}
          />
          <ProFormText
            name="acountName"
            label='账户名'
            placeholder={'请输入账户名'}
            rules={[
              {
                required: true,
                message:'请输入账户名',
              },
            ]}
          />
      </div>,
    };

    const toolBar1 = () => [
      <Button
          type = "primary"
          key = "primary"
          onClick={()=>handleClick('5')}
      > 
      {'更改代币状态'}
      </Button>,
      <Button
          type = "primary"
          key = "primary"
          onClick={()=>handleClick('7')}
      > 
      {'增发'}
      </Button>,
      <Button
          type = "primary"
          key = "primary"
          onClick={()=>handleClick('8')}
      > 
      {'扣除'}
      </Button>,
    ]

    const toolBar2 = () => [
      <Button
          type = "primary"
          key = "primary"
          onClick={()=>handleClick('6')}
      > 
      {'更改账户状态'}
      </Button>,
      <Button
          type = "primary"
          key = "primary"
          onClick={()=>handleClick('8')}
      > 
      {'扣除'}
      </Button>,
    ]

    const handleOk = async(values) => {
      setSearch(values)
      // console.log(values,detail)
      // 展示页面对应类型和请求的载荷
      console.log(checkType,values,)
      if(checkType == "7"){
        await queryMethod[checkType]({...values,types:token.getStore('type')})
      }else if(checkType == "8"){
        await queryMethod[checkType]({...values,types:token.getStore('type')})
      }else if(checkType == "5"){
        await queryMethod[checkType]({...values,types:token.getStore('type')})
      }else if(checkType == "6"){
        await queryMethod[checkType]({...values,types:token.getStore('type')})
      }
      actionRef1?.current?.reload();
      setModalOpen(false)
    };

    // 数据各页面管理
    const handleClick= (type) => {
      setCheck(type)
      // setDetail('')
      setSearch('')
      setModalOpen(true)
  }


    // 所有发行货币获取
    const ruleAll = async() => {
      if(token.getStore('type') != "government"){
        message.error("只有government账户可用！")
        alert("此功能需government用户方可使用！")
        return
      }
      const end = await showAllToken({types:token.getStore('type')})
     
      if(end){
          const arr = Object.values(end.Currency).map((item,index)=>{item.id=index;return item;})
          console.log(arr)
          return{ data: arr }
      }
    }

    //对应币种下用户获取
    const TokenUser = async() => {
      if(param1){
        const end = await showTokenUser({...param1,types:token.getStore('type')})
        const arr =[];
        arr.push(end)
        console.log(arr)
        if(end){
          return{ data: arr }
        }
      }
    }

    
    return <PageContainer>
        <ZTable
            title={'所有发行代币'}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={allToken}
            // toolBar={}
            rule={ruleAll}
            toolBar={toolBar1}
            search={false}
            rowkey = 'id'
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
                      message.success('提交成功');
                  }}
              >
                  <Space>
                      <ProFormText
                            width="md"
                            name="symbol"
                            label="币种"
                            placeholder="币种"
                        />
                  <Button type="primary" onClick={()=>formRef.current.submit()} style={{marginBottom:20}}>查询</Button>
                  </Space>
              </ProForm>
          </Space>
        </Card>

        <ZTable
            title={'对应币种下用户'}
            actionRef={actionRef1}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={allToken}
            toolBar={toolBar2}
            rule={TokenUser}
            search={false}

            rowkey = 'id'
        />

        <ZModal 
          formRef={formRef}
          isModalOpen={createModalOpen}
          setIsModalOpen={setModalOpen}
          handleOk={handleOk}
          checkType={checkType}
          title={'操作'}
          modeItem={itemRender[checkType]}
        />

        <JMenu 
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index