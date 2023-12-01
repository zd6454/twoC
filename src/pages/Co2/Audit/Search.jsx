
import React,{useState,useRef} from "react";
import { PageContainer,ProFormText,ProFormSelect} from '@ant-design/pro-components';
import {Button,Space,Tabs, message} from 'antd'
import {queryAll,queryWaitAccept,queryHisById,queryHisByCompany,agree,reject} from './serves'
import ZTable from '../../components/ZTable'
import JMenu from '../../components/JMenu'
import ZModal from './ZModal'
import token from '../../../utils/currentToken'

const Index=()=>{
    const actionRef = useRef()
    const [flag,setFlag] = useState('2')
    const formRef = useRef()
    const [createModalOpen,setModalOpen] = useState(false)
    const [checkType,setCheck] = useState('1')
    const [serchInfo,setSearch] = useState({})
    const [detail,setDetail] = useState([])
    // const [open,setOpen] = useState(false)
    
    const queryMethod = {
      '1':queryAll,
      '2':queryWaitAccept,
      '3':queryHisById,
      '4':queryHisByCompany,
      '13':agree,
      '14':reject
    };

    // 记录操作选项
    const content =(row) =>(
      <Space>
        <a style={{color:'green'}} onClick={()=>{
          setCheck('13')
          setModalOpen(true)
          setDetail(row)
        }}>通过</a>
        <a style={{color:'red'}} onClick={()=>{
          setCheck('14')
          setModalOpen(true)
          setDetail(row)
        }}>拒绝</a>
      </Space>
    );

    // 单行记录
    const columns = [
      {
        title: '报告ID',
        dataIndex: 'CarbonAuditInfoID',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: '公司',
        dataIndex: 'company',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: '审核者',
        dataIndex: 'AuditOrganiztion',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: '计划量',
        dataIndex: 'PlanCarbon',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: '实际量',
        dataIndex: 'RealCarbon',
        ellipsis:true,
        valueType: 'text',
      },
      {
        title: '日期',
        dataIndex: 'date',
        ellipsis:true,
      },
      {
        title: '状态',
        dataIndex: 'status',
        ellipsis:true,
      },
      {
        title: '历史',
        dataIndex: 'History',
        ellipsis:true,
      },
      {
        title: "操作",
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) =>{
          return record.status=='wait' ? <Space>
          <a key="agree" onClick={async()=>{
            setDetail(record)
            const end = await agree({
                ...record,
                types:token.getStore('type')
              })
              message.success(end) 
          }} >
            通过
          </a>
          <a key="reject" onClick={async()=>{
            setDetail(record)
            const end = await reject({
                ...record,
                types:token.getStore('type')
              })
              message.success(end) 
          }} >
            拒绝
          </a>
          </Space> : ''}
      },
    ];

    // 页面切换
    const items = [
      {
        key: '1',
        label: '已收到',
      },
      {
        key: '2',
        label: '待审核',
      },
    ];

    // 针对不同查询按钮的不同弹窗
    const itemRender = {
      '3':<div>
         <ProFormText
            name="CarbonAuditInfoNo"
            label='报告ID'
            placeholder={'请输入报告ID'}
            rules={[
              {
                required: true,
                message:'请输入报告ID',
              },
            ]}
          />
          <ProFormSelect 
            name="types"
            label='账户类型'
            placeholder={'请选择账户类型'}
            rules={[
              {
                required: true,
                message:'请选择账户类型',
              },
            ]}
            options={[ 'government']}
          />
      </div>,
      '4':<div>
         <ProFormText
            name="company"
            label='公司名'
            placeholder={'请输入公司名'}
            rules={[
              {
                required: true,
                message:'请输入公司名',
              },
            ]}
          />
      </div>,
    };

    // 数据各页面管理
    const handleClick= (type) => {
        setCheck(type)
        setDetail('')
        setSearch('')
        setModalOpen(true)
    }

    const handleOk = async(values) => {
      setSearch(values)
      // console.log(values,detail)
      // 展示页面对应类型和请求的载荷
      console.log(checkType,values,)
      actionRef?.current?.reload();
      setModalOpen(false)
    };

    const toolBar=() => [
      <Button
        type="primary"
        key="primary"
        onClick={()=>handleClick('3')}
      >
        ID查询
      </Button>,
      <Button
        type="primary"
        key="primary"
        onClick={()=>handleClick('4')}
      >
        公司查询
      </Button>,
    ];

    const rule = async (params) => {
      if(token.getStore('type') != "government"){
        message.warning("暂无权限") 
        return;
      }
      if(checkType=='3'){
        const end = await queryMethod[checkType]({...serchInfo,types:token.getStore('type')});
        const arr = [];
        arr.push(end.History[0].bill)
        message.success('查询成功')
        return{ data: arr}
      }else{
        const end = await queryMethod[checkType]({...serchInfo,types:token.getStore('type')});
        // console.log(end)
        message.success('查询成功')
        return{ data: end}
      }
    }

    return <PageContainer>
        <ZTable
           title={<Tabs defaultActiveKey="1" items={items} onChange={(e)=>{
             setCheck(e);
             actionRef?.current.reload()
           }} />}
           actionRef={actionRef}
           setSelectedRows={(e)=>{console.log(e)}}
           columns={columns}
           search={false}
           toolBar={ toolBar}
           rule={rule}
           rowkey = 'CarbonAuditInfoID'
        />
      <ZModal 
       formRef={formRef}
       isModalOpen={createModalOpen}
       setIsModalOpen={setModalOpen}
       handleOk={handleOk}
       checkType={checkType}
       title={'查询'}
       modeItem={itemRender[checkType]}
      />
      {/* <ZDrawer 
        open={open}
        setOpen={setOpen}
        columns={columns}
        currentRow={detail}
      /> */}
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index