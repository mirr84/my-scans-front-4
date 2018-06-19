import React from 'react';

import Login from "../login/login";

import {Col, Collapse, Row, Table} from 'antd';

const Panel = Collapse.Panel;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    render: text => text,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}];

const data = [];
for (let i = 1; i <= 1000; i++) {
    data.push({
        key: i,
        name: ''+i+''+i,
        age: ''+i+''+i+''+i+''+i
    });
}

const Journal = () => {

    const state = {
        bordered: true,
        size: 'small',
        rowSelection: {},
        scroll: {y: 'calc(100vh - 360px)'},
    }

    return (
        <div style={{height: 'calc(100vh - 98px)'}}>
            <Login/>

            <Row gutter={8}>
                <Col span={24}>
                    <Collapse bordered={false} defaultActiveKey={'1'} onChange={(e) => console.log(e)}>
                        <Panel header="filter" key={'1'}>
                            {'filter'}
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
            <Row gutter={8} style={{height: 'calc(100vh - 162px)'}}>
                <Col span={16}>
                    <Collapse bordered={false} defaultActiveKey={'2'}
                              onChange={(e) => console.log(e)}>
                        <Panel header="journal" key={'2'}>

                            <Table {...state} columns={columns} dataSource={data}/>

                        </Panel>
                    </Collapse>
                </Col>
                <Col span={8}>
                    <Collapse bordered={false} defaultActiveKey={'3'} onChange={(e) => console.log(e)}>
                        <Panel header="scan" key={'3'}>
                            {'scan'}
                        </Panel>
                    </Collapse>
                </Col>
            </Row>

        </div>
    );
};

export default Journal;
