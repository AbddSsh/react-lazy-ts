import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../models/ITodo";
import { fetchTodo } from "../api/fetchTodos";
import { useParams } from "react-router-dom";
import { Card, Layout, Row } from "antd";

const TodoPage: FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [todo, setTodo] = useState<ITodo>();
  useEffect(() => {
    if (id) {
      fetchTodo(parseInt(id, 10)).then((data) => setTodo(data));
    }
  }, []);
  return (
    <Layout>
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
        {" "}
        <Card
          title={todo?.title}
          bordered={false}
          style={{ width: 300, boxShadow: "0px 3px 15px rgba(0,0,0, 0.3)" }}
        >
          {todo?.id}. {todo?.title}
        </Card>
      </Row>
    </Layout>
  );
};

export default TodoPage;
