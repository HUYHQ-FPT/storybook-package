import "./index.scss";

import React, { useMemo, useState } from "react";
import { Button, Checkbox, Collapse, Input } from "antd";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const { Panel } = Collapse;

export interface optionProp {
  label: string;
  value: string;
}

interface GroupCheckboxFilterProps {
  name: string;
  title: string;
  isSearch: boolean;
  options: optionProp[];
}

const GroupCheckboxFilter: React.FC<GroupCheckboxFilterProps> = ({
  isSearch,
  name,
  title,
  options,
}) => {
  const [number, setNumber] = useState(5);
  const [search, setSearch] = useState("");
  const onChangeCheckBox = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", { [name]: checkedValues });
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const optionsShow = useMemo(() => {
    if (options.length < number) {
      let newOption = [...options];
      const filterOption = newOption.filter(({ label }) =>
        label.toLowerCase().includes(search)
      );
      return filterOption;
    } else {
      return options.slice(0, number);
    }
  }, [number, search]);

  return (
    <div className="m-group-checkbox-filter">
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
          {isSearch && (
            <Input
              size="large"
              className="m-group-checkbox-filter__search"
              placeholder="Nhập từ khoá tìm kiếm tại đây"
              prefix={<SearchOutlined />}
              onChange={onChangeSearch}
            />
          )}

          <Checkbox.Group
            className="m-group-checkbox-filter__checkbox"
            options={optionsShow}
            onChange={onChangeCheckBox}
          />
          {optionsShow.length < options.length && optionsShow.length ? (
            <Button
              type="link"
              className="m-group-checkbox-filter__button"
              onClick={() => setNumber(number + 5)}
            >
              Thêm <DownOutlined />
            </Button>
          ) : options.length === optionsShow.length && number > 5 ? (
            <Button
              type="link"
              className="m-group-checkbox-filter__button"
              onClick={() => setNumber(5)}
            >
              Thu gọn <UpOutlined />
            </Button>
          ) : null}
        </Panel>
      </Collapse>
    </div>
  );
};

export default GroupCheckboxFilter;
