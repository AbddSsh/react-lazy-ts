import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api/fetchUsers";
import { IUser } from "../models/IUser";
import { Card, Layout, Row } from "antd";

const UserPage: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    if (id) {
      fetchUser(parseInt(id, 10)).then((data) => setUser(data));
    }
  }, []);
  return (
    <Layout style={{ margin: "0 auto", background: "white" }}>
      <Row
        justify={"center"}
        style={{
          display: "grid",
          gridTemplate: "1fr, 1fr",
          justifyContent: "center",
          alignContent: "center",
          height: "80vh",
        }}
      >
        <Card
          style={{ width: 300, boxShadow: "0px 3px 15px rgba(0,0,0, 0.3)" }}
          title={user?.name}
          bordered={true}
        >
          {user?.id}. {user?.address.city}
        </Card>
      </Row>
    </Layout>
  );
};

export default UserPage;
