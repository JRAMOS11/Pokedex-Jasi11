export const usePokemonService = ()=>{
    const getPokemonList = async (page = 1, limit = 20) => {
        try {
            const offset = limit * (page - 1);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al Fetch de pokemon", error);
            throw error;
        }
    }

    const getPokemonId = (url)=>{
        // https://pokeapi.co/api/v2/pokemon/1/
        const elements = url.split('/');
        const pokemonId = elements[elements.length - 2];
        return pokemonId;
    }

    const getPokemonImgUrl = (id)=>{
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

    return {
        getPokemonList,
        getPokemonId,
        getPokemonImgUrl
    };
}