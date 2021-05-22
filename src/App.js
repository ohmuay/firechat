import { firebase } from "./initFirebase";
import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Space } from "antd";

const db = firebase.database();
function App() {
  const history = useHistory();
  const onFinish = (values) => {
    const rooms = db.ref("rooms");
    const newRoom = rooms.push({ messages: [] });
    history.push(`/room/${newRoom.key}`);
  };

  return (
    <>
      <Space>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Display Name: " name="user">
            <Input />
          </Form.Item>
          <Form.Item label="Room : " name="message">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enter
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
}

export default App;
