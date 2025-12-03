import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router";

export const Layout = ()=>{
   return ( <section className="flex flex-col min-h-0 w-full">
        <Header title="Pokedex 2025" />
        <main className="flex-1">
            <Outlet />
        </main>
        <Footer />
    </section>
   );
}
export default Layout;