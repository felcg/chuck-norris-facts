import { FactsContext } from "@presentation/context";
import { Props } from "@presentation/protocols";
import React, { useContext } from "react";
import Spinner from "../Spinner";
import "./facts-styles.scss";

const Facts: React.FC<Props> = ({ children }) => {
  const { loading } = useContext(FactsContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="factsContainer">{children}</section>
      )}
    </>
  );
};

export default Facts;
