import { StarOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";

export const SideMenu: FC = () => {
  const location = useLocation();
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["/list"]}
      selectedKeys={[location.pathname]}
      mode="inline"
    >
      <Menu.Item key="/list" icon={<UnorderedListOutlined />}>
        <Link to="/list">List</Link>
      </Menu.Item>

      <Menu.Item key="/favorites" icon={<StarOutlined />}>
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};
