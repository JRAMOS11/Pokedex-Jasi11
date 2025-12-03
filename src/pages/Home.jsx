import { HeroPanel } from "../components/HeroPanel"
import { PokeList } from "../components/Pokedex/PokeList"

export const Home = ()=>{
    return (
        <>
            <HeroPanel photoId="340" />
            <section className="p-4">
                <PokeList />
            </section>
        </>
    )
}