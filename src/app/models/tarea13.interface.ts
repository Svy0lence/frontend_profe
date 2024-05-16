export interface Categoria{
    id_categoria?: number,
    descripcion: string,
}

export interface Producto {
    id_producto?: number;
    nombre: string;
    marca: string;
    precio: number;
    stock: number;
    categoria: Categoria;
}