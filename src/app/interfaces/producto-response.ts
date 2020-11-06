export interface ProductoResponse {
    message: string;
    data:    Producto[];
}

export interface Producto {
    id_productos: number;
    codigo_nem:   string;
    nombre:       string;
    codigo_barra: string;
    stock:        number;
    stock_min:    number | null;
    precio1:      number;
    descuento:    number | null;
    representa:   null | string;
    precio2:      null;
    precio3:      null;
    vencimiento:  null;
}
