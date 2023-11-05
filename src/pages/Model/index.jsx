import React from "react";
import { PageContainer} from '@ant-design/pro-components';
import { Button, Card ,Avatar,Row,Col, Space,Tag } from "antd";
const { Meta } = Card;

const Index=()=>{
    const data=[
        {
            title:'高性能智能合约',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'转账智能合约',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'UTXO智能合约',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'基于属性加密智能合约',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'零知识证明智能合约',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'模板一',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'模板一',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
        {
            title:'模板一',
            src:'连接',
            author:'张三',
            time:'2023/11/01',
        },
    ]
    return <PageContainer>
        <Row gutter={[16,16]}>
            {data.map((item,index)=>
             <Col span={6} key={index}>
                <Card 
                    key={index}
                    style={{width:280}} 
                    title={<Tag color="#f50" >{item.title}</Tag>} 
                    extra={<Button type="primary" size="small">下载</Button>} 
                    actions={ [<Meta
                        style={{alignContent:'center',textAlign:'left',marginLeft:10}}
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                        description={
                             <Space>
                                <div>{item.author}</div>
                                <div>上传时间：{item.time}</div>
                            </Space>
                            
                        }
                      />]}
                
                >
                    {item.src}
                </Card>
             </Col>
            )}
            
        </Row>
    </PageContainer>
}
export default Index