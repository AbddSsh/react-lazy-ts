import { Avatar, List } from "antd";
import React, { useEffect, useState } from "react";
import { ITodo } from "../models/ITodo";
import { fetchTodos } from "../api/fetchTodos";
import { useNavigate } from "react-router-dom";

const TodosPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(item, index) => (
        <List.Item onClick={() => navigate(`/todos/${item.id}`)}>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fjames-camerons-avatar%2Fimages%2F3%2F33%2F%25D0%259B%25D0%25BE%25E2%2580%2599%25D0%25B0%25D0%25BA.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20230120063420%26path-prefix%3Dru&tbnid=YJABGn-Ksc6uzM&vet=12ahUKEwi1rcaZy_KAAxXlMRAIHQblBMUQMygFegQIARB7..i&imgrefurl=https%3A%2F%2Fjames-camerons-avatar.fandom.com%2Fru%2Fwiki%2F%25D0%259B%25D0%25BE%25E2%2580%2599%25D0%25B0%25D0%25BA&docid=4qIZ72ORCj2T4M&w=1200&h=1500&q=%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80&ved=2ahUKEwi1rcaZy_KAAxXlMRAIHQblBMUQMygFegQIARB7`}
              />
            }
            title={<a href="https://ant.design">{item?.id}</a>}
            description={item?.title}
          />
        </List.Item>
      )}
    />
  );
};

export default TodosPage;
