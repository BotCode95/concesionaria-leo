"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concesionaria = void 0;
class Concesionaria {
    constructor(nombre, stockInicial, vehiculos = []) {
        this.nombre = nombre;
        this.stock = stockInicial;
        this.vehiculos = vehiculos;
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
        this.stock += 1;
    }
    getVehiculos() {
        console.log(this.vehiculos);
        return this.vehiculos;
    }
    buscarVehiculo(tipoDeBusqueda, busqueda, busqueda2 = 0) {
        switch (tipoDeBusqueda) {
            case 'marca':
                return this.vehiculos.filter((vehiculo) => vehiculo.marca.includes(busqueda));
            case 'modelo':
                return this.vehiculos.filter((vehiculo) => vehiculo.modelo.includes(busqueda));
            case 'nivelDeDesgaste':
                return this.vehiculos.filter((vehiculo) => vehiculo.nivelDesgaste === parseInt(busqueda));
            case 'categoria':
                return this.vehiculos.filter((vehiculo) => vehiculo.categoria.includes(busqueda));
            case 'marca-nivelDeDesgaste':
                return this.vehiculos.filter((vehiculo) => vehiculo.marca.includes(busqueda) && vehiculo.nivelDesgaste === busqueda2);
            case 'categoria-nivelDeDesgaste':
                console.log("funcion que heredamos ", this.vehiculos.filter((vehiculo) => vehiculo.categoria.includes(busqueda) && vehiculo.nivelDesgaste === busqueda2));
                return this.vehiculos.filter((vehiculo) => vehiculo.categoria.includes(busqueda) && vehiculo.nivelDesgaste === busqueda2);
            default:
                return this.vehiculos;
        }
    }
}
exports.Concesionaria = Concesionaria;
//# sourceMappingURL=Concesionaria.js.map