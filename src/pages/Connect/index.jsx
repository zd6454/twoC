
import React,{useEffect,useState} from "react";
import { PageContainer} from '@ant-design/pro-components';
import {Card,Row ,Col,Progress, Button ,Radio,Space } from 'antd';
import ZCline from '../components/ZChart'
import JMenu from '../components/JMenu'
const Index=()=>{

    const [op1,setop1] = useState(1)
    const [op2,setop2] = useState(1)
    const [op3,setop3] = useState(1)
    const [op4,setop4] = useState(1)
    const [op5,setop5] = useState(1)

    const option={1:setop1,2:setop2,3:setop3,4:setop4,5:setop5}
    const onChange=(type,e)=>{
        option[type](e.target.value)
    }
    return <PageContainer>
         <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={6}>
                <Card title='机器学习' >
                    <Radio.Group onChange={(e)=>onChange(1,e)} value={op1}>
                        <Radio value={1}>机器方法1</Radio>
                        <Radio value={2}>机器方法2</Radio>
                        <Radio value={3}>机器方法3</Radio>
                        <Radio value={4}>机器方法4</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card title='深度学习' >
                    <Radio.Group onChange={(e)=>onChange(2,e)} value={op2}>
                        <Radio value={1}>机器方法1</Radio>
                        <Radio value={2}>机器方法2</Radio>
                        <Radio value={3}>机器方法3</Radio>
                        <Radio value={4}>机器方法4</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card title='加密算法' >
                    <Radio.Group onChange={(e)=>onChange(3,e)} value={op3}>
                        <Radio value={1}>机器方法1</Radio>
                        <Radio value={2}>机器方法2</Radio>
                        <Radio value={3}>机器方法3</Radio>
                        <Radio value={4}>机器方法4</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card title='联邦学习' >
                    <Radio.Group onChange={(e)=>onChange(4,e)} value={op4}>
                        <Radio value={1}>机器方法1</Radio>
                        <Radio value={2}>机器方法2</Radio>
                        <Radio value={3}>机器方法3</Radio>
                        <Radio value={4}>机器方法4</Radio>
                    </Radio.Group>
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card title='聚合算法' >
                    <Radio.Group onChange={(e)=>onChange(5,e)} value={op5}>
                        <Radio value={1}>机器方法1</Radio>
                        <Radio value={2}>机器方法2</Radio>
                        <Radio value={3}>机器方法3</Radio>
                        <Radio value={4}>机器方法4</Radio>
                    </Radio.Group>
                </Card>
            </Col>
        </Row>
        <Card 
            style={{marginTop:20}} 
            title={'数据展示'}  
            extra={<Space>
                <Button type="default">数据上传</Button>
                <Button type="primary">开始训练</Button>
            </Space>
           
        }
            >
            <Space>
                <Card>
                  <ZCline />  
                </Card>
                <Card title={'参数查看'} style={{height:250,width:350,marginLeft:27}} bodyStyle={{display:'grid'}}>
                    <Space> <h2>LOSS损失：</h2>0.998</Space>
                    <Space> <h2>梯度情况：</h2>0.998</Space>
                    <Space> <h2>训练伦次</h2>第三轮</Space>
                </Card>
            </Space>
        </Card>
        <Card style={{marginTop:20}} title={'训练进度'}>
          <Progress percent={50} status="active" />
        </Card>
        <JMenu />
    </PageContainer>
}
export default Index