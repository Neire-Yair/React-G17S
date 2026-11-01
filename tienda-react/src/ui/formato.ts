// Presentación: convierte el precio al formato de moneda que se muestra en la interfaz.
const formato = new Intl.NumberFormat('es-PE', {style: 'currency', currency : 'PEN'});

export default function formatearPrecio (monto : number) : string {
    return formato.format(monto);
}
