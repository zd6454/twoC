import React,{useRef,useState} from "react";
import { PageContainer, ProFormText,ProFormSelect,ProForm,ProFormDatePicker} from '@ant-design/pro-components';
import {Button,Space,Popover,Tabs, message} from 'antd'
import {queryAcceptAccept,queryByBill,queryHisById,
  queryHisByIdAndTime,queryPublishAccept,queryWaitAccept,
  toOthers,agree,reject,giveOthers
}from './serves'
import ZTable from '../components/ZTable'
import ZModal from './ZModal'
import JMenu from '../components/JMenu'
import ZDrawer from './Deawer'
import token from '../../utils/currentToken'

const Index=()=>{
    const actionRef = useRef()
    const formRef = useRef()
    const [createModalOpen,setModalOpen] = useState(false)
    const [checkType,setCheck] = useState('1')
    const [serchInfo,setSearch] = useState({})
    const [detail,setDetail] = useState([])
    const [open,setOpen] = useState(false)

    const queryMethod={
      '1':queryAcceptAccept,
      '2':queryWaitAccept,
      '3':queryPublishAccept,
      '4':queryByBill,
      '5':queryHisById,
      '6':queryHisByIdAndTime,
      '11':toOthers,
      '12':giveOthers,
      '13':agree,
      '14':reject
    }
    const [flag,setFlag] = useState('3')

    const content =(row) =>(
        <Space>
          <a style={{color:'green'}} onClick={()=>{
            setCheck('13')
            setModalOpen(true)
            setDetail(row)
          }}>同意</a>
          <a style={{color:'red'}} onClick={()=>{
            setCheck('14')
            setModalOpen(true)
            setDetail(row)
          }}>拒绝</a>
        </Space>
      );


    const giveOther=(row)=>{
      setDetail(row)
      setCheck('12')
      setModalOpen(true)
    }

    const suyuan=(row)=>{
       setCheck('6')
       setModalOpen(true)
       setTimeout(()=>{
        formRef?.current?.setFieldsValue({
          SourceBillInfoID:row.SourceBillInfoID,
          SplitCount:row.SplitCount,
         })
       },500)
    }

    const columns=[
      {
        title: '溯源ID',
        dataIndex: 'SourceBillInfoID',
        hideInTable:true,
        ellipsis:true
    },
        {
            title: '票据id',
            dataIndex: 'BillInfoID',
            ellipsis:true
        },
        {
            title: '票据金额',
            dataIndex: 'BillInfoAmt',
            ellipsis:true,
            valueType: 'text',
        },
        {
            title: '拆分次数',
            dataIndex: 'SplitCount',
            valueType: 'text',
            ellipsis:true
        },
        {
          title:'票据类型',
          dataIndex: 'BillInfoType',
          ellipsis:true
      },
        {
          title:'票据出票日期',
          dataIndex: 'BillInfoIsseDate',
          ellipsis:true
      },
        {
          title:'票据到期日期',
          dataIndex: 'billInfoDueDate',
          ellipsis:true
      },
        {
          title:'出票人证件号码',
          dataIndex: 'DrwrCmID',
          ellipsis:true
      },
        {
          title:'出票人名称',
          dataIndex: 'DrwrAcct',
          ellipsis:true
      },
        {
          title:'承兑人证件号码',
          dataIndex: 'AccptrCmID',
          ellipsis:true
      },
        {
          title:'承兑人名称',
          dataIndex: 'AccptrAcct',
          ellipsis:true
      },
        {
          title:'收款人证件号码',
          dataIndex: 'PyeeCmID',
          ellipsis:true
      },
        {
          title:'收款人名称',
          dataIndex: 'PyeeAcct',
          ellipsis:true
      },
        {
          title:'当前持票人证件号码',
          dataIndex: 'HoldrCmID',
          ellipsis:true
      },
        {
          title:'当前持票人名称',
          dataIndex: 'HoldrAcct',
          ellipsis:true
      },
        {
          title:'状态',
          dataIndex: 'State',
          ellipsis:true
      },
      
        {
            title:'操作',
            dataIndex: 'option',
            valueType: 'option',
            // hideInTable:checkType=='3',
            render: (_, row) => <Space>
            {checkType=='1'&&<a key="goto" onClick={()=>{setCheck('11');setModalOpen(true);setDetail(row)}} >拆分 </a>}
            <a key="suyuan1" onClick={()=>suyuan(row)} >溯源</a>
            {checkType=='2'&&<a key="acc" onClick={()=>false} ><Popover content={()=>content(row)} >接收</Popover></a>}
            {checkType=='1'&&<a key="to2" onClick={()=>giveOther(row)} >转让</a>}
            </Space>
            
          },
    ]

    const typeSelect=(
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
       options={[ 'smic','consumer','banks']}
      />
     )
     const items = [
      {
        key: '1',
        label: '已接收',
      },
      {
        key: '2',
        label: '待接收',
      },
      {
        key: '3',
        label: '已发布',
      },
    ];
    const  itemRender={
      '1':<div>
         <ProFormText
                name="SourceBillInfoID"
                label='原始账单ID'
                placeholder={'请输入原始账单ID'}
                rules={[
                  {
                    required: true,
                    message:'请输入原始账单ID',
                  },
                ]}
              />
              <ProFormText
                name="SplitCount"
                label='拆分次数'
                initialValue={0}
                placeholder={'请输入拆分次数'}
                rules={[
                  {
                    required: true,
                    message:'请输入原拆分次数',
                  },
                ]}
              />
      </div>,
      '2':typeSelect,
      '3':typeSelect,
      '4':<div>
          <ProFormText
                name="billInfoNo"
                label='票据单号'
                placeholder={'请输入单号'}
                rules={[
                  {
                    required: true,
                    message:'请输入单号',
                  },
                ]}
              />
        {/* {typeSelect} */}
      </div>,
      '5':<div>
        <ProFormText
                name="SourceBillInfoID"
                label='原始账单ID'
                placeholder={'请输入原始账单ID'}
                rules={[
                  {
                    required: true,
                    message:'请输入原始账单ID',
                  },
                ]}
              />
      </div>,
      '6':<div>
         <ProFormText
                name="SourceBillInfoID"
                label='原始账单ID'
                placeholder={'请输入原始账单ID'}
                rules={[
                  {
                    required: true,
                    message:'请输入原始账单ID',
                  },
                ]}
              />
              <ProFormText
                name="SplitCount"
                label='拆分次数'
                initialValue={0}
                placeholder={'请输入拆分次数'}
                rules={[
                  {
                    required: true,
                    message:'请输入原拆分次数',
                  },
                ]}
              />
              {/* {typeSelect} */}
      </div>,
      '11':<div>
           <ProForm.Group>
        <ProFormText 
                    name="BillInfoID"
                    placeholder={'请输入票据号码'}
                    label='票据号码'
                    width={'sm'}
                    rules={[{required: true, message:'请输入票据号码',},]}
                /> 
           <ProFormText 
                    name="BillInfoAmt"
                    placeholder={'请输入票据金额'}
                    label='票据金额'
                    width={'sm'}
                    rules={[{required: true, message:'请输入票据金额',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText 
                    name="BillInfoType"
                    placeholder={'请输入票据类型'}
                    label='票据类型'
                    width={'sm'}
                    rules={[{required: true, message:'请输入票据类型',},]}
                /> 
            <ProFormDatePicker 
                    name="BillInfoIsseDate"
                    placeholder={'请输入票据出票日期'}
                    label='票据出票日期'
                    width={'sm'}
                    rules={[{required: true, message:'请输入票据出票日期',},]}
                />
        </ProForm.Group>
        <ProForm.Group>
            <ProFormDatePicker 
                    name="BillInfoDueDate"
                    placeholder={'请输入票据到期日期'}
                    label='票据到期日期'
                    width={'sm'}
                    rules={[{required: true, message:'请输入票据到期日期',},]}
                /> 
           <ProFormText 
                    name="DrwrCmID"
                    placeholder={'请输入出票人证件号码'}
                    label='出票人证件号码'
                    width={'sm'}
                    rules={[{required: true, message:'请输入出票人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
         <ProFormText 
                    name="DrwrAcct"
                    placeholder={'请输入出票人名称'}
                    label='出票人名称'
                    width={'sm'}
                    rules={[{required: true, message:'请输入出票人名称',},]}
                /> 
           <ProFormText 
                    name="AccptrCmID"
                    placeholder={'请输入承兑人证件号码'}
                    label='承兑人证件号码'
                    width={'sm'}
                    rules={[{required: true, message:'请输入承兑人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
            <ProFormText 
                    name="AccptrAcct"
                    placeholder={'请输入承兑人名称'}
                    label='承兑人名称'
                    width={'sm'}
                    rules={[{required: true, message:'请输入承兑人名称',},]}
                /> 
           <ProFormText 
                    name="PyeeCmID"
                    placeholder={'请输入收款人证件号码'}
                    label='收款人证件号码'
                    width={'sm'}
                    rules={[{required: true, message:'请输入收款人证件号码',},]}
                /> 
        </ProForm.Group>
        <ProForm.Group>
             <ProFormText 
                    name="PyeeAcct"
                    placeholder={'请输入收款人名称'}
                    label='收款人名称'
                    width={'sm'}
                    rules={[{required: true, message:'请输入收款人名称',},]}
                /> 
           <ProFormText 
                    name="HoldrCmID"
                    placeholder={'请输入当前持票人证件号码'}
                    label='当前持票人证件号码'
                    width={'sm'}
                    rules={[{required: true, message:'请输入当前持票人证件号码',},]}
                />
        </ProForm.Group>
        <ProForm.Group>
            <ProFormText 
                    name="HoldrAcct"
                    placeholder={'请输入当前持票人名称'}
                    label='当前持票人名称'
                    width={'sm'}
                    rules={[{required: true, message:'请输入当前持票人名称',},]}
                /> 
           <ProFormText 
                    name="types"
                    placeholder={'请输入sdk调用者'}
                    label='sdk调用者'
                    initialValue={'zhongxin'}
                    width={'sm'}
                    rules={[{required: true, message:'请输入sdk调用者',},]}
                /> 
        </ProForm.Group>
      </div>,
      '12':<div>
           <ProFormText 
                    name="WaitEndorseCmID"
                    placeholder={'请输入银行工作人员的证件号'}
                    label='证件号'
                    width={'sm'}
                    rules={[{required: true, message:'请输入银行工作人员的证件号',},]}
                />
           <ProFormText 
                    name="WaitEndorseAcct"
                    placeholder={'请输入银行名字'}
                    label='银行名字'
                    width={'sm'}
                    rules={[{required: true, message:'请输入银行名字',},]}
                />
      </div>,
      '13':<div>
         <ProFormText 
                    name="WaitEndorseCmID"
                    placeholder={'请输入银行工作人员的证件号'}
                    label='证件号'
                    width={'sm'}
                    rules={[{required: true, message:'请输入银行工作人员的证件号',},]}
                />
      </div>,
      '14': <ProFormText 
                    name="WaitEndorseCmID"
                    placeholder={'请输入银行工作人员的证件号'}
                    label='证件号'
                    width={'sm'}
                    rules={[{required: true, message:'请输入银行工作人员的证件号',},]}
                />
    }
    const handleClick=(type)=>{
        setCheck(type)
        setDetail('')
        setSearch('')
        setModalOpen(true)
    }
    const handleOk=async(values)=>{
      setSearch(values)
      if(checkType=='4'){
        values.types = token.getStore('type')
        const end = await queryMethod[checkType](values)
        const history = end.History?.map((item)=>{
            return {
              TxId:item.TxId,
              ...item.bill
            }
        })
        end.History=history;
        setDetail(end)
        setOpen(true)
      }else if(checkType=='11'){
         values.oldbillNo=detail.BillInfoID
         console.log(values)
         values.types = token.getStore('type')
         const end = await queryMethod[checkType](values)
         if(end['拆分票据状态']=='成功'){
            message.success('拆分成功')
         }else{
          message.error('拆分失败')
         }
      }else if(checkType=='12'){
        // values.types='zhongxin'
        values.types = token.getStore('type')
        values.billNo=detail.BillInfoID
        // data.types = token.getStore('type')
        const end = await queryMethod[checkType](values)
        message.warning(end)
     }else if(checkType in ['1','2','3','5','6']){
        actionRef?.current?.reload();
      }else if(checkType =='13'||checkType=='14'){
        const data = values
        data.types = token.getStore('type')
        data.BillInfoID=detail.BillInfoID
        const end = await queryMethod[checkType](data)
        message.warning(end)
      }
      setModalOpen(false)
    }

    const toolBar=() => [
        <Button
          type="primary"
          key="primary"
          onClick={()=>handleClick('4')}
        >
          单号查询
        </Button>,
        <Button
          type="primary"
          key="primary"
          onClick={()=>handleClick('5')}
        >
          溯源查询
        </Button>,
        <Button
          type="primary"
          key="primary"
          onClick={()=>handleClick('6')}
        >
          溯源及拆分查询
        </Button>,
      ]

      const rule=async(params)=>{
        const end = await queryMethod[checkType]({...serchInfo,types:token.getStore('type')})
        return{ data:end}
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
           toolBar={toolBar}
           rule={rule}
           rowkey = 'SourceBillInfoID'
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
      <ZDrawer 
        open={open}
        setOpen={setOpen}
        columns={columns}
        currentRow={detail}
      />
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index