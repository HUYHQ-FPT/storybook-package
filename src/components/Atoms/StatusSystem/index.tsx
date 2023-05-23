import {
  CheckCircleFilled,
  CloseCircleFilled,
  WarningFilled,
} from "@ant-design/icons";
import { Tag } from "antd";
import React from "react";
import "./index.scss";
interface StatusSystemProps {
  type: "critical" | "warning" | "ok";
}

const StatusSystem: React.FC<StatusSystemProps> = ({ type }) => {
  let icon: React.ReactNode;
  let title: string = "";
  let color: "warning" | "error" | "success" = "success";
  switch (type) {
    case "critical":
      icon = <CloseCircleFilled style={{ color: "#FF2727", fontSize: 21 }} />;
      color = "error";
      title = "Critical";
      break;
    case "warning":
      icon = <WarningFilled style={{ color: "#F8A500", fontSize: 21 }} />;
      color = "warning";
      title = "Warning";
      break;

    default:
      icon = <CheckCircleFilled style={{ color: "#52C41A", fontSize: 21 }} />;
      title = "Ok";
      break;
  }
  return (
    <div className="a-status-system">
      <Tag icon={icon} color={color}>
        {title}
      </Tag>
    </div>
  );
};

export default StatusSystem;
