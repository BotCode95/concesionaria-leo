"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(kilometraje, tipoDeCombustible, modelo, marca, precio, serviceAlDia, tipocategoria, anio) {
        this.kilometraje = kilometraje;
        this.tipoDeCombustible = tipoDeCombustible;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.serviceAlDia = serviceAlDia;
        this.categoria = tipocategoria;
        this.anio = anio;
    }
    nivelDeDesgaste() {
        console.log('metodo nivel de desgaste');
    }
}
exports.Vehiculo = Vehiculo;
const auto = new Vehiculo(10000, 'Nafta', 'Corolla', 'Toyota', 6000000, false, 'Auto', 2010);
console.log(auto);
//# sourceMappingURL=Vehiculo.js.map