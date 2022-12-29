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
        this.nivelDesgaste = 0;
    }
    nivelDeDesgaste() {
        const antiguedad = this.calcularAntiguedad();
        console.log('Antiguedad Vehiculo', antiguedad);
        if (this.categoria === 'Camioneta') {
            if (this.tipoDeCombustible === 'Diesel') {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 1000;
            }
            else {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 100;
            }
        }
        else if (this.categoria === 'Motocicleta') {
            if (this.serviceAlDia && this.kilometraje < 30000) {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 1000;
            }
            else {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 10;
            }
        }
        else {
            if (this.serviceAlDia) {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 100;
            }
            else {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 10;
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste);
        }
        console.log('metodo nivel de desgaste');
    }
    calcularAntiguedad() {
        const anioActual = new Date().getFullYear();
        if (anioActual === this.anio) {
            return 1;
        }
        return anioActual - this.anio;
    }
}
exports.Vehiculo = Vehiculo;
const auto = new Vehiculo(10000, 'Nafta', 'Corolla', 'Toyota', 6000000, false, 'Auto', 2010);
auto.nivelDeDesgaste();
console.log(auto);
//# sourceMappingURL=Vehiculo.js.map