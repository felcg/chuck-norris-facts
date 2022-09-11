import { Props } from "@presentation/protocols";
import React from "react";
import "./container-styles.scss";

const Container: React.FC<Props> = ({ children }) => {
  return (
    <section className="container" data-testid={"home-container"}>
      {children}
    </section>
  );
};

export default Container;
