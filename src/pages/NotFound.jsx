import { HeroPanel } from "../components/HeroPanel";

export const NotFound = ()=>{
    return (
        <>
            <HeroPanel photoId="260" />
            <h1>404 Página solicitada no existe o se movió de lugar.</h1>
        </>
    );
}