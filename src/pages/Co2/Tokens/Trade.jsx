import React,{useState,useRef} from "react";
import { PageContainer,ProForm, ProFormText,ProFormSelect} from '@ant-design/pro-components';
import {Button,Space,Card,message,} from 'antd'
import {userTokenHistory, tokenHistory} from './serves'
import ZTable from '../../components/ZTable'
import JMenu from '../../components/JMenu'
import token from '../../../utils/currentToken'

const Index=()=>{
    const actionRef = useRef()
    const formRef = useRef()
    const [flag,setFlag] = useState('2')
    const [param1,setParam1] = useState(null) 

    const columns = [
        {
            title: '转账账户',
            dataIndex: 'From',
            ellipsis:true,
            valueType: 'text',
        },
        {
            title: '接收账户',
            dataIndex: 'To',
            ellipsis:true,
            valueType: 'text',
        },
        {
            title: '交易份额',
            dataIndex: 'Amount',
            ellipsis:true,
            valueType: 'text',
        },
        {
            title: '交易ID',
            dataIndex: 'TxId',
            ellipsis:true,
            valueType: 'text',
        },
    ];

    const rule = async () => {
        if(param1.accountName){
            const end = await userTokenHistory({...param1,types:token.getStore('type')});
            return {data: end}
        }else{
            const end = await tokenHistory({...param1,types:token.getStore('type')});
            return {data: end}
        }
    }


    return <PageContainer>
        <Card style={{marginBottom:20}}> 
          <Space>
              <ProForm 
                  layout={'horizontal'}
                  formRef={formRef}
                  submitter={false}
                  onFinish={async (values) => {
                      setParam1(values)
                      // 重新调用rule方法
                      actionRef.current.reload()
                      message.success('操作成功');
                  }}
              >
                  <Space>
                      <ProFormText
                            width="md"
                            name="symbol"
                            label="*币种"
                            placeholder="币种（必填）"
                        />
                      <ProFormText
                            width="md"
                            name="accountName"
                            label="交易账户"
                            placeholder="交易账户（选填）"
                        />
                  <Button type="primary" onClick={()=>formRef.current.submit()} style={{marginLeft:20,marginBottom:25}}>查询</Button>
                  </Space>
              </ProForm>
          </Space>
        </Card>

        <ZTable
            title={'相关交易记录'}
            actionRef={actionRef}
            setSelectedRows={(e)=>{console.log(e)}}
            columns={columns}
            rule={rule}
            search={false}

            rowkey = 'id'
        />

        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index