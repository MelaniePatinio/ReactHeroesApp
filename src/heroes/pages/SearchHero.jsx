import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm } from "../../hooks/useForms";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onIpuntChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log({ searchText });
    navigate(`?q=${searchText}`);
  };

  const heroesBusqueda = getHeroByName(q);

  const searchHero = q.length === 0;
  const noHero = q.length > 0 && heroesBusqueda.length > 0;
  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onIpuntChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Search hero</div>
          ) : (
            heroesBusqueda.length === 0 && (
              <div className="alert alert-danger">
                No hero with the name <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: searchHero ? "" : "none" }}
          >
            Search hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: noHero ? "none" : "" }}
          >
            No hero with the name <b>{q}</b>
          </div>

          {heroesBusqueda.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
