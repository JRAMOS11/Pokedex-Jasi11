import { Link } from "react-router";
export const Header = ( { title = "Pokedex 2025 Tercero" } )=>{
    return (
        <header className="bg-slate-700 text-white flex justify-between items-center px-4">
            <h1 className="text-lg font-bold">{title}</h1>
            <nav>
                <ul className="flex gap-2 items-center">
                    <li><Link to="/" className="inline-block px-6 py-4 text-sm font-bold hover:bg-slate-500">Inicio</Link></li>
                    <li><Link to="/about" className="inline-block px-6 py-4 text-sm font-bold hover:bg-slate-500">Acerca de Nosotros</Link></li>
                </ul>
            </nav>
        </header>
    );
}