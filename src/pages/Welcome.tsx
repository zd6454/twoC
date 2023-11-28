import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Space,Avatar,Image } from 'antd';
import React,{useEffect} from 'react';
import store from '../utils/currentToken';
import { UserOutlined } from '@ant-design/icons';
import logo from './Asserts/logo.png';
import yuan from './Asserts/yuan.png';
import m1 from './Asserts/images/m1.png';
import m2 from './Asserts/images/m2.png';
import m3 from './Asserts/images/m3.png';
import m4 from './Asserts/images/m4.png';
import m5 from './Asserts/images/m5.png';
import m6 from './Asserts/images/m6.png';
import m7 from './Asserts/images/m7.png';
import m8 from './Asserts/images/m8.png';
import m9 from './Asserts/images/m9.png';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: Object;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        
        minWidth: '65vw',
        // minWidth: '350px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 80,
            height: 30,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '4px 16px 16px 12px',
            marginBottom:'20px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundColor: 'blue',
            borderRadius: 20
            // backgroundImage:
            //   "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '23px',
            color: token.colorText,
            paddingLeft: 20,
            paddingBottom: 20,
            fontWeight: 650
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <div
        style={
          {
            marginLeft: 15,
            fontWeight: 600,
          }
        }
      >
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
      </div>
      
    </div>
  );
};



const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  
  const desc=(param, p)=>{
    return(
      <Space>
        <Avatar size={128} icon={<UserOutlined />}  src={p}/>
        <div>
          <p>{param[0]}</p>
          <p>{param[1]}</p>
        </div>
      </Space>
    )
  }

  return (
    // 页面渲染的地方
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            position:'relative',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '25px',
              fontWeight: 600,
              color: token.colorTextHeading,
            }}
          >
            欢迎来到工商管理学院
          </div>
            {/* <img  style={{left:10,top:0,width:1000}}   src={yuan} /> */}

            <p
            style={{
              fontSize: '15px',
              color: token.colorTextSecondary,
              lineHeight: '28px',
              marginTop: 16,
              marginBottom: 32,
              width: '75%',
            }}
          >
            湖南大学工商管理学院坐落于苍翠拱卫的岳麓山畔，毗邻传承千年中华文脉的岳麓书院，素有“千年学府，百年商学”之美誉。
            始终坚持人才培养中心地位，加强商科建设和特色发展，做精本科教育，创新教学模式，不断提升新时代经世致用商学领军人才培养质量，全面推进建设中国特色世界一流商学院。
          </p>
            <img  style={{position:'absolute',right:101,top:0,width:127}}   src={logo} />
          
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://grzy.hnu.edu.cn/site/index/machaoqun"
              title="马超群"
              desc={desc(["博士、教授、博士生导师，国家杰出青年科学基金获得者、“新世纪百千万人才工程”国家级人选、教育部新世纪优秀人才支持计划人选、教育部创新团队带头人、湖南省自然科学创新研究群体带头人、湖南省“121”人才工程计划第一层次人选、湖南省“芙蓉学者计划”特聘教授成就奖获得者、湖南智库联盟专家、享受国务院政府特殊津贴专家。",
                          "现任湖南省“企业管理与决策支持技术”重点实验室主任。兼任全国工商管理硕士专业学位研究生教育指导委员会委员，中国优选法统筹法与经济数学研究会副理事长，中国投资协会投资学科建设委员会副会长，中国系统工程学会常务理事，中国金融系统工程学会常务理事，湖南省工商管理学会理事长，湖南省系统工程与管理学会轮值理事长，《系统工程》、《中国管理科学》、《经济数学》等国内外多个杂志编委与副主编。"],m1)}
            />
            <InfoCard
              index={2}
              title="周中定"
              href="https://grzy.hnu.edu.cn/site/index/zhouzhongding"
              // desc={desc()}
              desc={desc(["博士、工商管理学院副教授，主持国家九五期间重点科技项目“H.324多媒体通信终端产业化”。主持国家自然科学基金面上项目“移动互联网信息/内容服务定价决策实证模型与仿真研究”(NO.70671038)。主持湖南省科技重大专项项目子课题一：电子信息供应链金融区块链平台高并发分布式计算与存储架构（NO.2018GK1020）；参与国家自然科学基金面上项目：金融数据隐私风险度量及隐私保护下的数据共享与挖掘研究（NO.718710190）。",
                        "国内外论文发表共20余篇，专著3本。2000年获湖南省科技进步二等奖（排名第一），2003年获中国移动战略管理成果一等奖（排名第一）。"],m2)}
            />
            <InfoCard
              index={2}
              title="兰秋军"
              href="https://grzy.hnu.edu.cn/site/index/lanqiujun"
              // desc={desc()}
              desc={desc(["教授，管理科学与工程专业博士生导师，“数据科学与区块链”湖南省重点实验室主任，信息管理与信息系统专业国家一流本科专业建设责任教授。目前主要研究兴趣为数据科学、区块链与隐私计算。著有《金融数据挖掘》、《运筹学》等著作，在国内外学术刊物上发表学术论文四十多篇。",
                        "主持国家自然科学基金两项、教育部人文社科规划项目一项，以及其它省部级和企业项目五项，并参与各类纵向课题十余项。其学术成果获湖南省科技进步二等奖一次，教育部科技进步一等奖一次。曾在多家IT企业任职，负责多个信息系统项目的研发，涉及金融保险、互联网营销、房地产、零售、教育等行业。"],m3)}
            />
            <InfoCard
              index={3}
              title="任弈帅"
              href="https://grzy.hnu.edu.cn/site/index/renyishuai"
              // desc={desc()}
              desc={desc(["湖南大学公共管理学院副教授、硕士生导师；主要从事资源与环境管理、能源-经济-气候政策系统建模及应用、区块链与数字治理、数字货币及风险管理等领域研究。现已主持国家自然科学基金、湖南省自然科学基金、中国科协等5项科研项目，作为主要研究人员参加国家自然科学基金重大项目、重点项目和面上项目，国家社会科学基金重大项目、重点项目和面上项目以及省部级项目20余项",
                        "截至目前，以第一作者或通讯作者在，国内外权威或知名学术期刊发表论文近40篇；参与编写专著1部、教材1部。目前担任Journal of Sustainable Finance & Investment期刊的副主编，担任多个期刊的客座主编。"],m4)}
            />
            <InfoCard
              index={3}
              title="陈艳"
              href="https://grzy.hnu.edu.cn/site/index/chenyan7"
              // desc={desc()}
              desc={desc(["日本早稻田大学工学博士，湖南大学“岳麓学者”特聘教授，博士生导师，研究生教育管理中心主任。湖南省“湖湘青年英才”科技创新类人才计划入选者，上海市“浦江人才计划”入选者，上海市“晨光学者计划”入选者，现任“中国优选法统筹法与经济数学研究会”理事、“管理科学与工程学会”理事等。",
                        "在国际高水平期刊与国内权威期刊《中国管理科学》等发表论文40余篇。作为负责人主持并完成国家自然科学基金面上项目1项、国家自然科学基金重点项目子项目1项、国家自然科学基金重大研究计划重点项目子项目1项、国家自然科学基金青年项目1项、教育部人文社科规划项目1项、省部级项目3项，先后担任日本学术振兴会（JSPS）研究员以及早稻田大学客座研究员。"],m5)}
            />
            <InfoCard
              index={3}
              title="米先华"
              href="https://grzy.hnu.edu.cn/site/index/mixianhua"
              // desc={desc()}
              desc={desc(["助理教授，硕士生导师，目前主要研究兴趣为数据科学、金融量化、区块链应用等。在国内外学术刊物上发表SSCI/SCI及中文重点期刊学术论文多篇。",
                        "主持国家自然科学基金青年项目一项，湖南省自然科学基金青年项目一项，参与国家级重大重点项目多项。研究方向：数据科学、机器学习、金融量化、区块链技术与应用。"],m6)}
            />
            <InfoCard
              index={3}
              title="姚铮"
              href="https://grzy.hnu.edu.cn/site/index/yaozheng"
              // desc={desc()}
              desc={desc(["博士，湖南大学工商管理学院副教授，硕士生导师，系党支部书记、系副主任。主要从事创新管理、战略管理、信息科学与技术等多学科交叉领域研究。",
                        "主持国家自然科学基金项目、教育部人文社会科学研究基金项目、湖南省自然科学基金项目、湖南省哲学社会科学基金项目、湖南省普通高校教学改革研究项目等8项，在国内外重要学术期刊发表论文20余篇，出版著作2本，获湖南省教学成果一等奖1项。"],m7)}
            />
            <InfoCard
              index={3}
              title="周科"
              href="https://grzy.hnu.edu.cn/site/index/zhouke2"
              // desc={desc()}
              desc={desc(["博士，副教授，博士生导师，湖南大学金融科技（Fintech）MBA项目主任、湖南大学数字社会和区块链研究院金融科技研究中心主任、中国运筹学会金融工程与风险管理分会常务理事、副秘书长。",
                        "主要从事金融风险管理、风险度量、动态投资组合等领域的研究。"],m8)}
            />
            <InfoCard
              index={3}
              title="何文"
              href="https://grzy.hnu.edu.cn/site/index/hewen2"
              // desc={desc()}
              desc={desc(["博士，现任湖南大学工商管理学院副教授、博士生导师、岳麓学者、信息管理与电子商务系副系主任。先后获得南开大学学士、中国人民大学硕士以及香港中文大学博士学位。研究方向为物流与供应链管理、收益管理、供应链金融、电子商务平台、区块链。",
                        "主持国家自然科学基金青年项目和面上项目各1项，担任多类期刊匿名审稿人。“湖南大学京东消费电子零售创新研究中心”与“湖南大学数字社会和区块链研究院”主要参与人员。曾被评为中国人民大学信息学院优秀毕业生，湖南大学优秀教师新人，湖南大学本科毕业论文优秀指导老师，以及2016、2018、2021届湖南大学工商管理学院毕业生“我最喜爱的老师”。"],m9)}
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
