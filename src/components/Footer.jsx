export const Footer = ()=>{
    return (
        <footer className="bg-slate-700 text-white p-4 flex justify-center items-center">
            <span>Todos los Derechos Reservados &copy; {new Date().getFullYear().toString()}</span>
        </footer>
    );
}