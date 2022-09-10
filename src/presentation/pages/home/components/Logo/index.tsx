import React from "react";
import "./logo-styles.scss";
import chuckNorrisImg from "./cn-image.png";

const Logo: React.FC = () => {
  return <img src={chuckNorrisImg} alt="Chuck Norris smiling" />;
};

export default Logo;
