import React from "react";
import "./index.scss";
import "antd/dist/reset.css";
import { Button as ButtonAntd, ButtonProps as ButtonPropsAntd } from "antd";

interface ButtonProps extends ButtonPropsAntd {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  color?: string;
  size?: "small" | "middle" | "large" | undefined;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = "small",
  color,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <ButtonAntd
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </ButtonAntd>
  );
};

export default Button;
