import { Layout, Menu } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item onClick={() => navigate("/")}>Главная</Menu.Item>
        <Menu.Item onClick={() => navigate("/todos")}>Список дел</Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Header;
