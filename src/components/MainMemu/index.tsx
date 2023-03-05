import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}



const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '/page3/01'),
    getItem('Bill', '/page3/02'),
    getItem('Alex', '/page3/03'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '/page4/01'), getItem('Team 2', '/page4/02')]),
  getItem('Files', 'page5', <FileOutlined />),
];



export default function MainMemu() {
  const location=useLocation()
  const [openKes, setOpenKeys] = useState([""])
  const navigate = useNavigate()
  const menuClick = (e: { key: string }) => {
    navigate(e.key)
  }
  const handleChage = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <div>
      <Menu theme="dark"
        onClick={menuClick}
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        items={items}
        onOpenChange={handleChage}
        openKeys={openKes}
      />
    </div>
  )
}
