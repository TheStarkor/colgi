import { useState } from "react";
import axios from "axios";

import { Form, Input, Button, Upload, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import InfoHeader from "../../components/InfoHeader";

const Info = () => {
  const [isError, setError] = useState(false);

  const naviagte = useNavigate();

  const onFinish = async (values) => {

    // window.location.href = "/intro";
    naviagte("/intro")
  };

  return (
    <>
      <InfoHeader
        title={"Labeling Online Review Sentences based on the Customer Journey"}
        sub_title={"We want to know your expertise in the field of art. This data is used only for experimental analysis."}
      />

      <div className="signup-container">
        <div className="signup-form-container">
          <Form initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              label="Prolific ID"
              name="prolific_id"
              rules={[{ required: true, message: "닉네임을 입력해주세요!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Major"
              name="major"
              rules={[{ required: true, message: "이메일을 입력해주세요!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button onClick={onFinish} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Info;
