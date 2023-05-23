import React from "react";

import "./index.scss";
import { Button, Collapse, Form, Input } from "antd";
import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

interface formProp {
  from: string;
  to: string;
}

interface FilterNumberProps {
  title: string;
  handleValues: (values: formProp) => void;
}

const FilterNumber: React.FC<FilterNumberProps> = ({ title, handleValues }) => {
  const [form] = Form.useForm();
  const onFinish = (values: formProp) => {
    handleValues(values);
  };

  return (
    <div className="a-filter-number">
      <Collapse
        expandIcon={({ isActive }) => {
          return isActive ? (
            <CaretDownOutlined
              style={{ fontSize: 16, color: "rgb(68 68 68 / 40%)" }}
            />
          ) : (
            <CaretRightOutlined
              style={{ fontSize: 16, color: "rgb(68 68 68 / 40%)" }}
            />
          );
        }}
        defaultActiveKey={[title]}
        ghost
      >
        <Panel header={title} key={title}>
          <Form onFinish={onFinish} form={form}>
            <div className="a-filter-number__input" style={{ gap: 8 }}>
              <Form.Item noStyle name="from">
                <Input type="number" placeholder="Từ" />
              </Form.Item>
              <div className="a-filter-number__line" />
              <Form.Item name="to" noStyle>
                <Input type="number" placeholder="Đến" />
              </Form.Item>
            </div>

            <Form.Item>
              <div style={{ margin: "8px 10px 0 2px" }}>
                <Button
                  className="a-filter-number__button"
                  htmlType="submit"
                  style={{ margin: "0 5px" }}
                >
                  Áp dụng
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FilterNumber;
