import "./index.scss";

import {
  Button,
  Form,
  FormInstance,
  Input,
  Select,
  SelectProps,
  Space,
  Popconfirm,
} from "antd";
import React, { useState } from "react";

import { CloseOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";

export interface TeamPermission {
  name: string;
  id: string;
}

interface SelectItemProps extends SelectProps {
  listTeamPermission: TeamPermission[];
  handleNew: (value: string, form: FormInstance) => void;
  handleDelete: (value: string) => void;
}

const SelectItem: React.FC<SelectItemProps> = ({
  listTeamPermission,
  handleNew,
  handleDelete,
  ...selectProps
}) => {
  const [isAddNewTeam, setIsAddNewTeam] = useState(false);
  const [newValueTeam, setNewValueTeam] = useState<string>("");
  const [form] = Form.useForm();

  const onClickNewTeam = (value: string) => {
    handleNew(value, form);
  };
  const onClickDeleteTeam = async (e: any, value: string) => {
    e.stopPropagation();
    e.preventDefault();
    handleDelete(value);
  };

  return (
    <Select
      {...selectProps}
      className="a-select-item"
      dropdownRender={(menu) => (
        <>
          {menu}
          <div className="a-select-item__content">
            <hr></hr>
            {!isAddNewTeam ? (
              <Button
                className="a-select-item__button-add"
                type="text"
                onClick={() => setIsAddNewTeam(true)}
              >
                Chỉnh sửa / Thêm mới
              </Button>
            ) : (
              <Form form={form}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ flex: 1 }}>
                    <Form.Item
                      name="newTeamValue"
                      style={{ marginBottom: "unset" }}
                    >
                      <Input
                        allowClear
                        placeholder="Nhập tại đây"
                        className="a-select-item__add-new-team"
                        value={newValueTeam}
                        onChange={(e) => setNewValueTeam(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item style={{ marginBottom: "unset" }}>
                      <Space>
                        <SaveOutlined
                          style={{ marginLeft: 10, fontSize: 14 }}
                          onClick={(e) => onClickNewTeam(newValueTeam)}
                        />
                        <CloseOutlined
                          style={{ fontSize: 14 }}
                          onClick={() => setIsAddNewTeam(false)}
                        />
                      </Space>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            )}
          </div>
        </>
      )}
      onDropdownVisibleChange={(open) => {
        if (!open) {
          form.setFieldsValue({ newTeamValue: undefined });
          setIsAddNewTeam(false);
        }
        return;
      }}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) => {
        return (option?.name.toLowerCase() ?? "").includes(input);
      }}
    >
      {listTeamPermission &&
        listTeamPermission.map((item: TeamPermission) => (
          <Select.Option name={item.name} value={item.id} key={item.id}>
            <div className="a-select-item__select-option">
              <div>{item.name}</div>
              {isAddNewTeam ? (
                <Popconfirm
                  title="Các user có giá trị này sẽ bị mất liên kết"
                  onConfirm={(e: any) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onClickDeleteTeam(e, item.id);
                  }}
                  onCancel={(e: any) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  okText="Đồng ý"
                  cancelText="Không"
                >
                  <DeleteOutlined
                    style={{ color: "red" }}
                    onClick={async (e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  />
                </Popconfirm>
              ) : (
                ""
              )}
            </div>
          </Select.Option>
        ))}
    </Select>
  );
};

export default SelectItem;
