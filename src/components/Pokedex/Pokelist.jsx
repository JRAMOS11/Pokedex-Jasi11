// src/components/Pokedex/PokeList.jsx
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "../Button";
import { usePokemonService } from "../../hooks/usePokemonService";

export const PokeList = () => {
  const { getPokemonList, getPokemonId, getPokemonImgUrl } =
    usePokemonService();

  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  const PAGE_SIZE = 50;

  useEffect(() => {
    const loadData = async () => {
      const resData = await getPokemonList(page, PAGE_SIZE);
      setData(resData);
    };
    loadData();
  }, [page]);

  if (!data) {
    return <div>No se ha cargado aún...</div>;
  }

  const totalPages = Math.ceil(data.count / PAGE_SIZE);

  return (
    <section className="pokedex-page">
      <div className="pokedex-container">
        <div className="pokedex-grid">
          {data.results.map((pokemon) => {
            const id = getPokemonId(pokemon.url);
            const imgUrl = getPokemonImgUrl(id);

            return (
              <Card
                key={id}
                id={id}
                name={pokemon.name}
                defaultImgUri={imgUrl}
              />
            );
          })}
        </div>

        <div className="pagination">
          {page > 1 && (
            <Button onClick={() => setPage(page - 1)}>Anterior</Button>
          )}

          <span className="pagination-info">
            Página {page} de {totalPages}
          </span>

          {page < totalPages && (
            <Button onClick={() => setPage(page + 1)}>Siguiente</Button>
          )}
        </div>
      </div>
    </section>
  );
};