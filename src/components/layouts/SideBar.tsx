import React, { useState } from 'react';
import {
    UserOutlined,
    HomeOutlined,
    CodeSandboxOutlined,
    ProfileOutlined,
} from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import { Menu, Layout } from 'antd'

const { Sider } = Layout;
type Props = {}

const SideBar = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.Item>
                        <NavLink to={'/'}>
                            <HomeOutlined />
                            <span>Home</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to={'/products'}>
                            <CodeSandboxOutlined />
                            <span>Product</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <ProfileOutlined />
                        <span>Category</span>
                    </Menu.Item>
                    <Menu.Item>
                        <UserOutlined />
                        <span>User</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}

export default SideBar