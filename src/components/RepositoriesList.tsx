import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import useActions from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { repositories, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {error && <div>{error}</div>}
      {loading && <div>...loading</div>}
      {!error &&
        !loading &&
        repositories.map((term) => {
          return <div>{term}</div>;
        })}
    </div>
  );
};

export default RepositoriesList;
