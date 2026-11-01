import { useState } from "react";
import type { Pedido } from "../../dominio/tipos";
import { leerPedidos } from "../../infraestructura/pedidos";
import formatearPrecio from "../formato";

export default function Pedidos() {
    const [pedidos] = useState<Pedido[]>(leerPedidos);

    if (pedidos.length === 0) {
        return (
            <section>
                <h1 className="text-2xl font-bold">Mis pedidos</h1>
                <p className="mt-2">Todavía no tienes pedidos.</p>
            </section>
        );
    }

    return (
        <section>
            <h1 className="mb-4 text-2xl font-bold">Mis pedidos</h1>

            {pedidos.map((pedido) => (
                <article key={pedido.id} className="mb-4 rounded-lg border p-4">
                    <p>Fecha: {new Date(pedido.fecha).toLocaleDateString("es-PE")}</p>

                    <ul className="my-2">
                        {pedido.items.map((item) => (
                            <li key={item.id}>
                                {item.cantidad} × {item.nombre}
                            </li>
                        ))}
                    </ul>

                    <p>Total: {formatearPrecio(pedido.total)}</p>
                </article>
            ))}
        </section>
    );
}