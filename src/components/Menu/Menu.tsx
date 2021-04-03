import { StarOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "./elements";
import { useLocation } from "react-router-dom";

export const SideMenu: FC = () => {
  const location = useLocation();
  return (
    <StyledMenu
      defaultSelectedKeys={["/list"]}
      selectedKeys={[location.pathname]}
      mode="inline"
    >
      <StyledMenu.Item key="/list" icon={<UnorderedListOutlined />}>
        <Link to="/list">List</Link>
      </StyledMenu.Item>

      <StyledMenu.Item key="/favorites" icon={<StarOutlined />}>
        <Link to="/favorites">Favorites</Link>
      </StyledMenu.Item>
    </StyledMenu>
  );
};
