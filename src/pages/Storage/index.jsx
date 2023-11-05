import React from "react";
import { PageContainer, ProDescriptions,ProFormSelect} from '@ant-design/pro-components';
import {Row,Col,Card} from 'antd'
import ZTable from '../components/ZTable'

const Index=()=>{
    
    const coulumn1=[
        {
          title: '名称',
          key: 'text',
          dataIndex: 'id',
          ellipsis: true,
          copyable: true,
        },
        {
          title: '组织',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
            title: '容器数目',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
          },
        {
          title: '创建时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },

        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              新建
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              销毁
            </a>,
          ],
        },
      ]
    const coulumn2=[
        {
          title: '名称',
          key: 'text',
          dataIndex: 'id',
          ellipsis: true,
        //   copyable: true,
        },
        {
          title: '组织',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
            title: '容器名称及端口',
            key: 'money',
            dataIndex: 'money',
            valueType: 'money',
            ellipsis: true,
          },
        {
          title: '创建时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },

        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              新建
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              销毁
            </a>,
          ],
        },
      ] 
    const coulumn3=[
        {
          title: '名称',
          key: 'text',
          dataIndex: 'id',
          ellipsis: true,
        //   copyable: true,
        },
        {
          title: '组织',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
          title: '创建时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },

        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              新建
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              销毁
            </a>,
          ],
        },
      ] 
    const coulumn4=[
        {
          title: '名称',
          key: 'text',
          dataIndex: 'id',
          ellipsis: true,
        //   copyable: true,
        },
        {
          title: '功能',
          key: 'state',
          dataIndex: 'state',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            open: {
              text: '未解决',
              status: 'Error',
            },
            closed: {
              text: '已解决',
              status: 'Success',
            },
          },
        },
        {
          title: '创建时间',
          key: 'date',
          dataIndex: 'date',
          valueType: 'date',
        },

        {
          title: '操作',
          valueType: 'option',
          render: () => [
            <a target="_blank" rel="noopener noreferrer" key="link">
              新建
            </a>,
            <a target="_blank" rel="noopener noreferrer" key="view">
              销毁
            </a>,
          ],
        },
      ]  
    const options=[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
       ]

    const titleSelect=(title)=>(
            <ProFormSelect
                        showSearch={{filter:(inputValue,path)=>path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}
                        width="150px"
                        name="title1"
                        label={title}
                        options={options}
                    />
    )
    const proDesc=(title, column)=>{
        return  <ProDescriptions
        title={titleSelect(title)}
        dataSource={{
          id: '这是一段文本columns',
          date: '20200809',
          money: '1212100',
          state: 'all',
          state2: 'open',
        }}
        columns={column}
      >
      </ProDescriptions>
    }
    return <PageContainer>
       <Row gutter={[16, 16]}>
            <Col span={12} >
                <Card>
                    <ZTable
                     title={titleSelect('网络')}
                     columns={coulumn1}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('通道')}
                     columns={coulumn2}
                    />
                </Card>
            </Col>
            <Col span={12} >
                 <Card>
                  <ZTable
                     title={titleSelect('组织')}
                     columns={coulumn3}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('orderer')}
                     columns={coulumn2}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('peer')}
                     columns={coulumn2}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('couchdb')}
                     columns={coulumn2}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('fabric-ca')}
                     columns={coulumn2}
                    />
                </Card>
            </Col>
            <Col span={12} >
                <Card>
                  <ZTable
                     title={titleSelect('链码')}
                     columns={coulumn4}
                    />
                </Card>
            </Col>
      </Row>
    </PageContainer>
}
export default Index