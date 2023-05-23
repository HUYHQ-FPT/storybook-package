import React from "react";
import { Popover, Checkbox, CheckboxOptionType, Input } from "antd";
import { SearchOutlined, ControlOutlined } from "@ant-design/icons";

import "./index.scss";
interface IDropdownFilter {
  options: (string | number | CheckboxOptionType)[];
  open: boolean;
}
const DropdownFilter: React.FC<IDropdownFilter> = ({ options, open }) => {
  return (
    <div className="a-dropdown-filter">
      <Popover
        trigger="click"
        placement="bottom"
        overlayClassName="a-dropdown-filter__popover"
        open={open}
        content={
          <div>
            <Input bordered={false} autoFocus prefix={<SearchOutlined />} />
            <div className="a-dropdown-filter__note">
              (Hiển thị tối đa 10 lựa chọn)
            </div>
            <Checkbox.Group
              options={options}
              className="a-dropdown-filter__checkbox"
            />
          </div>
        }
      >
        <ControlOutlined className="a-dropdown-filter__icon" />
      </Popover>
    </div>
  );
};

export default DropdownFilter;
