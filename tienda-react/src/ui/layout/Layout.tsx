import { useEffect, useState } from "react";
import Header from "../components/Header";
import PanelCarrito from "../components/PanelCarrito";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { NOMBRE_TIENDA } from "../../dominio/tipos";

 function leerCarritoAbierto(){
    const guardado = localStorage.getItem('carritoAbierto');

    if(guardado === null) return false;

    try {
        const valor: unknown = JSON.parse(guardado);
        return typeof valor === "boolean" ? valor : false;
    } catch {
        return false;
    }
 }
export default function() {
    const [carritoAbierto, setCarritoAbierto] = useState(leerCarritoAbierto);
    useEffect(() => {
        localStorage.setItem('carritoAbierto', JSON.stringify(carritoAbierto));
    }, [carritoAbierto]);
    return (
        <main className="mx-auto max-w-5xl p-6">
            <Header nombre={NOMBRE_TIENDA} eslogan="La Tecnologica es el Futuro"/>
            <button className="mb-4 text-sm" 
            onClick={() => setCarritoAbierto(!carritoAbierto)}>
                {carritoAbierto ? 'Ocultar carrito' : 'Ver carrito'}
            </button>
            {carritoAbierto && (<PanelCarrito/>)}
            <Outlet/>
            <Footer/>
        </main>
    )
}