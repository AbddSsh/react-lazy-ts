import React, { FC, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { fetchUsers } from "../api/fetchUsers";
import { Layout, List, Row } from "antd";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);
  return (
    <Layout.Content>
      <Row justify={"center"}>
        <h1>Список пользователей</h1>
      </Row>
      <List size="small">
        {users.map((user) => (
          <List.Item
            onClick={() => navigate(`/home/${user.id}`)}
            key={user?.id}
          >
            {user?.id}. {user?.name}
          </List.Item>
        ))}
      </List>
    </Layout.Content>
  );
};

export default HomePage;
