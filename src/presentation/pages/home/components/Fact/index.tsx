import { Result } from "domain/models";
import React, { useEffect, useState } from "react";
import "./fact-styles.scss";

type Props = {
  fact: Result;
};

const Fact: React.FC<Props> = ({ fact }) => {
  const [formattedFact, setFormattedFact] = useState<Result>();
  const formatFact = (fact: Result) => {
    const formatedDate = new Date(fact.created_at).toLocaleDateString();
    const newFormattedFact = {
      ...fact,
      created_at: formatedDate,
    };

    setFormattedFact(newFormattedFact);
  };

  useEffect(() => {
    formatFact(fact);
  }, [fact]);

  return (
    <>
      {formattedFact && (
        <section className="fact">
          <q className="fact__quote">{formattedFact.value}</q>
          <p className="fact__createdDate">
            <strong>Created at: </strong> {formattedFact.created_at}
          </p>
          {formattedFact.categories.length > 0 && (
            <p className="fact__categories">
              <strong>Categories: </strong>
              <span className="fact__categories--pill">
                {formattedFact.categories}
              </span>
            </p>
          )}
        </section>
      )}
    </>
  );
};

export default Fact;
