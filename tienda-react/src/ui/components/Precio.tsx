import formatearPrecio from "../formato";

interface Props {
    precio: number;
}

export default function Precio({ precio}: Props) {
    const precioConIGV = precio * 1.18;

    return (
        <div className="mt-2">
            <p>Precio: {formatearPrecio(precio)}</p>
            <p className="text-sm text-gray-500">
                Con IGV: {formatearPrecio(precioConIGV)}
            </p>
        </div>
    );
}