
import React,{useEffect,useState} from "react";
import { PageContainer} from '@ant-design/pro-components';
import {Card,Row ,Col,Progress, Button ,Radio,Space,Upload,message,Spin } from 'antd';
import ZCline from '../components/ZChart'
import JMenu from '../components/JMenu'
import token from  '../../utils/currentToken';
import {query,upload,download,queryParam,train} from './serves'

const Index=()=>{
    const [flag,setFlag] = useState('1')
    const [file,setFile] = useState()
    const [op1,setop1] = useState(1)
    const [op2,setop2] = useState(1)
    const [op3,setop3] = useState(1)
    const [op4,setop4] = useState(1)
    const [op5,setop5] = useState(1)
    const [dataSource,setData] = useState([])
    const [spins,setSpin]= useState(false)
    const [percent,setPercent] = useState(0)

    const option={1:setop1,2:setop2,3:setop3,4:setop4,5:setop5}
    const onChange=(type,e)=>{
        option[type](e.target.value)
    }
    useEffect(()=>{
      const getInit=async()=>{
          const end = await queryParam()
          console.log(end,'123')
          setData(end?.result)
      }
      getInit()
    },[])
    const onChangeFile=(info)=>{
        if(info.fileList.length==0){
            setFile(null)
        }else{
            if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            setFile(info.file)
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
       }
        }
        
    }

    const uploadData=async()=>{
        const values={
            trainData:file?.originFileObj,
            types:token.getStore('type')
        }
       const end = await upload(values)
       if(end.message){
        message.success(end.message)
       }
       
    }
    const stratTrain=async()=>{
        setSpin(true)
        const values={
            'method':'deep',
            'aggregate':'fed',
            'encrypto':'encry'
        }
       if(!file){
        message.warning('请先上传文件数据')
        return
       }
       await uploadData().then(async()=>{
          const end = await train(values)
          if(end.output){
            message.success(end.output)
            setPercent(60)
        }
       })
    
     
     setSpin(false)
    }
    return <PageContainer>
         <Row gutter={[20, 20]}>
            <Col className="gutter-row" span={10}>
                <Card title='机器学习' >
                    <Radio.Group onChange={(e)=>onChange(1,e)} value={op1}>
                        <Radio value={1}>决策树算法</Radio>
                        <Radio value={2}>K-近邻算法</Radio>
                        <Radio value={3}>随机森林</Radio>
                        <Radio value={4}>朴素贝叶斯</Radio>
                        <Radio value={5}>支持向量机</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={10}>
                <Card title='深度学习' >
                    <Radio.Group onChange={(e)=>onChange(2,e)} value={op2}>
                        <Radio value={1}>卷积神经</Radio>
                        <Radio value={2}>循环神经</Radio>
                        <Radio value={3}>生成对抗网络</Radio>
                        <Radio value={4}>强化学习</Radio>
                        <Radio value={5}>长短期记忆网络</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={10}>
                <Card title='加密算法' >
                    <Radio.Group onChange={(e)=>onChange(3,e)} value={op3}>
                        <Radio value={1}>DES方法</Radio>
                        <Radio value={2}>MD5方法</Radio>
                        <Radio value={3}>SHA-256</Radio>
                        <Radio value={4}>AES方法</Radio>
                        <Radio value={5}>RSA方法</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={10}>
                <Card title='聚合算法' >
                    <Radio.Group onChange={(e)=>onChange(4,e)} value={op4}>
                        <Radio value={1}>FedProx方法</Radio>
                        <Radio value={2}>FedNova方法</Radio>
                        <Radio value={3}>FedAvg方法</Radio>
                        <Radio value={4}>SCAFFOLD方法</Radio>
                    </Radio.Group>
                </Card>
            </Col>
        </Row>
        <Card 
            style={{marginTop:20}} 
            title={'数据展示'}  
            extra={<Space>
                <Upload 
                name="trainData"
                data={{types:token.getStore('type')}}
                onChange={onChangeFile}
                headers = {{
                    authorization: 'authorization-text',
                  }}
                method="POST"
                maxCount={1}
                // action='https://lidengjia.hnufintech.cn/hnuFinTechPlatform/fedBlokchain/traindataUpload'
                >
                     <Button type="default">数据上传</Button>
                </Upload>
                <Button type="primary" onClick={()=>stratTrain()}>开始训练</Button>
                </Space>}
        >
            <Card>
                <Spin  spinning={spins} >
                   <ZCline
                      dataSource={dataSource}
                  />
                </Spin>
                    
            </Card>
                {/* <Card title={'参数查看'} style={{height:250,width:350,marginLeft:50}} bodyStyle={{display:'grid'}}>
                    <Space> <h2>LOSS损失：0.998</h2></Space>
                    <Space> <h2>梯度情况：0.998</h2></Space>
                    <Space> <h2>训练轮次：第三轮</h2></Space>
                </Card> */}
        </Card>
        <Card style={{marginTop:20}} title={'训练进度'}>
          <Progress percent={percent} status="active" />
        </Card>
        <JMenu
          flag={flag}  //传递参数
        />
    </PageContainer>
}
export default Index