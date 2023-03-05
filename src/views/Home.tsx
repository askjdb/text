import React, { useState } from 'react';
import MainMemu from '@/components/MainMemu';
import { Breadcrumb, Layout,  theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 菜单栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <MainMemu/>
      </Sider>
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header style={{ background: colorBgContainer, paddingLeft: '16px' }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content style={{ margin: '16px 16px', padding: 24, minHeight: 360, background: colorBgContainer }}>
          {/* 内容 */}
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ height: '48px', lineHeight: "48px", textAlign: 'center', padding: 0 }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;