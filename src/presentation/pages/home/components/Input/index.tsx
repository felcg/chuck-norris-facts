import React, { useContext, useEffect, useState } from "react";
import { FactsContext } from "@presentation/context";
import {
  SearchService,
  CategoriesService,
  RandomFactService,
} from "@application/usecases";
import { AxiosHttpClient } from "@infra/http";
import { ChuckNorrisApi } from "@infra/protocols/chuckNorrisApi";
import "./input-styles.scss";

const Input: React.FC = () => {
  const [input, setInput] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const { setFacts, setLoading, setTotalFacts } = useContext(FactsContext);
  const httpClient = new AxiosHttpClient();
  const searchService = new SearchService(ChuckNorrisApi.searchUrl, httpClient);
  const randomService = new RandomFactService(
    ChuckNorrisApi.random,
    httpClient
  );
  const disableSubmit = input.length <= 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setInput(typedValue);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { result, total } = await searchService.get(input);

      if (category) {
        const filteredByCategory = result.filter((fact) =>
          fact.categories.includes(category)
        );
        setFacts(filteredByCategory);
        setTotalFacts(filteredByCategory.length);
      } else {
        setFacts(result);
        setTotalFacts(total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandom = async () => {
    try {
      setLoading(true);
      const randomFact = await randomService.get();
      setFacts([randomFact]);
      setTotalFacts(1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const categoriesService = new CategoriesService(
      ChuckNorrisApi.categories,
      httpClient
    );

    const Categories = async () => {
      const categories = await categoriesService.get();
      setCategories(categories);
    };

    Categories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="inputWrapper" data-testid={`input-wrapper`}>
      <input
        className="inputWrapper__input"
        placeholder="Type a string to search"
        data-testid={"query-input"}
        onFocus={(e) => {
          e.target.readOnly = false;
        }}
        onChange={(e) => handleChange(e)}
        value={input}
      />
      <select
        className="inputWrapper__select--categories"
        name="select--categories"
        id="select--categories"
        onChange={(event) => handleCategoryChange(event)}
      >
        <option value="">Select category</option>
        {categories.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
      <button
        className="inputWrapper__button"
        onClick={handleSubmit}
        disabled={disableSubmit}
      >
        Search
      </button>
      <button className="inputWrapper__button" onClick={handleRandom}>
        Get a random fact!
      </button>
    </div>
  );
};

export default Input;
