import {
  Container,
  Header,
  Input,
  Logo,
  Fact,
  Facts,
  Pagination,
} from "./components";
import FactsProvider, { FactsContext } from "presentation/context/FactsContext";
import { useContext } from "react";

const Home: React.FC = () => {
  const { paginatedFacts } = useContext(FactsContext);
  const noFactsFound = paginatedFacts && paginatedFacts.length === 0;
  const factsFound =
    paginatedFacts && paginatedFacts.length > 1 && !noFactsFound;

  return (
    <Container>
      <Logo />
      <Header text="Chuck Norris Facts" />
      <Input />
      {factsFound && <Pagination />}
      <Facts>
        {paginatedFacts?.map((fact) => {
          return <Fact fact={fact} key={fact.id} />;
        })}
      </Facts>
      {noFactsFound && <div>No facts found.</div>}
    </Container>
  );
};
const HomeWrapper = () => (
  <FactsProvider>
    <Home />
  </FactsProvider>
);

export default HomeWrapper;
