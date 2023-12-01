import React,{ useState } from "react";
import { PageContainer} from '@ant-design/pro-components';
import { Button, Card ,Avatar,Row,Col, Space,Tag ,message} from "antd";
import {downloadQuery} from './serves';
const { Meta } = Card;
import JMenu from '../components/JMenu';
import Zmodal from './Zmodal'
import p0 from './images/p0.jpg';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';

const Index=()=>{
    const [isModalOpen,setOpen] = useState(false)
    const [info,setInfo] = useState(null)

    const data=[
        {
            title:'存件存证智能合约',
            src: p0,
            author:'admin',
            time:'2023/11/28',
            flag: 0,
        },
        {
            title:'食品溯源智能合约',
            src: p1,
            author:'admin',
            time:'2023/11/27',
            flag: 1,
        },
        {
            title:'零知识证明智能合约',
            src: p2,
            author:'admin',
            time:'2023/11/27',
            flag: 2,
        },
        {
            title:'状态转移智能合约',
            src: p3,
            author:'admin',
            time:'2023/11/24',
            flag: 3,
        },
    ]
    // 根据模板类型获取对应下载链接
    const handleClick = async(flag) => {
        let param = "";
        if(flag == 0){
            param = "/hnuFinTechPlatform/smartContract/certificate";
        }else if(flag == 1){
            param = "/hnuFinTechPlatform/smartContract/foodTrace";
        }else if(flag == 2){
            param = "/hnuFinTechPlatform/smartContract/gnark";
        }else if(flag == 3){
            param = "/hnuFinTechPlatform/smartContract/stateTransfer";
        }
        if(param){
            const end = await  downloadQuery(param);
            if(end.code){
                setInfo(end?.code)
                setOpen(true)
            }else{
              message.warning('下载出错')
            }
           
        }
    }
    return <PageContainer>
        <Row gutter={[16,16]}>
            {data.map((item,index)=>
             <Col span={8} key={index}>
                <Card 
                    key={index}
                    // vw自适应
                    style={{width:"fit-content"}} 
                    title={<Tag color="#f50" >{item.title}</Tag>} 
                    extra={<Button type="primary" size="small" onClick = {()=>handleClick(item.flag)}>下载</Button>} 
                    actions={ [<Meta
                        style={{alignContent:'center',textAlign:'left',marginLeft:25,fontWeight:650}}
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                        description={
                             <Space>
                                <div style={{marginTop:5}}>{item.author}</div>
                                <div style={{marginTop:5, marginLeft:10}}>上传时间：{item.time}</div>
                            </Space>
                            
                        }
                      />]}
                
                >
                    {/* {item.src} */}
                    <img src={item.src} width="250px" height="170px"/>
                </Card>
             </Col>
            )}
            
        </Row>
        <JMenu/>
        <Zmodal
         isModalOpen={isModalOpen}
         setOpen={setOpen}
         info={info}
        />
    </PageContainer>
}
export default Index