import React from "react";
import "./header-styles.scss";

type Props = {
  text: string;
};

const Header: React.FC<Props> = ({ text }) => {
  return <h1 className="header">{text}</h1>;
};

export default Header;
