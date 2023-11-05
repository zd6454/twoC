import React from "react";
import { PageContainer} from '@ant-design/pro-components';
import{Row,Col,Card,Space, Divider} from 'antd'
import {teacher} from './info'

const Index=()=>{

    return <PageContainer>
        <Divider orientation="left">一级学科带头人</Divider>
        <Row >
            <Col >
                <Card title={teacher.first.name} width="100%" >
                    <Space>
                      <img src={teacher.first.src} style={{width:150,height:150}} ></img>
                      <div>{teacher.first.desc}</div>
                    </Space>
                </Card>
            </Col>
        </Row>
        <Divider orientation="left">二级学科带头人</Divider>
        <Row gutter={[16, 16]}>
            <Col span={12} >
                <Card title={teacher.second[0].name} width="100%" style={{height:250}} >
                    <Space>
                      <img src={teacher.second[0].src} style={{width:150,height:150}} ></img>
                      <div style={{textOverflow:'ellipsis'}}>{teacher.second[0].desc}</div>
                    </Space>
                </Card>
            </Col>
            <Col span={12} >
                <Card title={teacher.second[1].name} width="100%" style={{height:250}} >
                    <Space>
                      <img src={teacher.second[1].src} style={{width:150,height:150}} ></img>
                      <div  style={{textOverflow:'ellipsis'}}>{teacher.second[1].desc}</div>
                    </Space>
                </Card>
            </Col>
        </Row>
    </PageContainer>
}
export default Index