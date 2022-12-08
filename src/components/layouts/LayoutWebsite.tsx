import React, { useState } from 'react';
import {
    UserOutlined,
    HomeOutlined,
    CodeSandboxOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet} from 'react-router-dom'
import SideBar from './SideBar';

const { Header, Content, Sider } = Layout;

type Props = {}

const LayoutWebsite = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar/>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutWebsite