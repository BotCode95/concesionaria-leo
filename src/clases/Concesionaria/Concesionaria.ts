import { Vehiculo } from '../Vehiculo/Vehiculo';
import { Sucursal } from '../Sucursal/Sucursal';
class Concesionaria {
    nombre: string;
    stock: number;
    vehiculos: Vehiculo[]
    sucursales: Sucursal[]
    

    constructor( nombre: string, stockInicial: number){
        this.nombre = nombre;
        this.stock = stockInicial;
        this.vehiculos = []
        this.sucursales = []
    }
}