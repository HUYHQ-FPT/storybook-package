import React from "react";
import "./index.scss";
import "antd/dist/reset.css";
import { Card as CardAntd, CardProps as CardPropsAntd, TabsProps } from "antd";
import { CardSize, CardTabListType, CardType } from "antd/es/card/Card";
interface CardProps extends CardPropsAntd {
  /**
   * Card title
   */
  title?: React.ReactNode;
  prefixCls?: string;
  extra?: React.ReactNode;
  bordered?: boolean;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  loading?: boolean;
  hoverable?: boolean;
  /**
   * Card children
   */
  children?: React.ReactNode;
  id?: string;
  className?: string;
  rootClassName?: string;
  size?: CardSize;
  type?: CardType;
  cover?: React.ReactNode;
  /**
   * The action list, shows at the bottom of the Card
   */
  actions?: React.ReactNode[];
  /**
   * List of TabPane's head
   */
  tabList?: CardTabListType[];
  tabBarExtraContent?: React.ReactNode;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;

  tabProps?: TabsProps;
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className="a-card">
      <CardAntd {...props}>{children}</CardAntd>
    </div>
  );
};

export default Card;
