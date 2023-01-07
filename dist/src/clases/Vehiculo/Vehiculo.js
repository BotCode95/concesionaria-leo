"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculos = exports.Vehiculo = void 0;
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
        if (this.categoria === 'Camioneta') {
            if (this.tipoDeCombustible === 'Diesel') {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 1000;
            }
            else {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 100;
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste);
        }
        else if (this.categoria === 'Motocicleta') {
            if (this.serviceAlDia && this.kilometraje < 30000) {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 1000;
            }
            else {
                this.nivelDesgaste = (this.kilometraje / antiguedad) / 10;
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste);
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
//Creamos Los Vehiculos
const veh1 = new Vehiculo(200, 'Nafta', 'Frontier', 'Nissan', 12000000, true, 'Camioneta', 2023);
const veh2 = new Vehiculo(3200, 'Nafta', 'Hilux', 'Toyota', 12000000, true, 'Camioneta', 2022);
const veh3 = new Vehiculo(300, 'Nafta', '3008', 'Peugeot', 12000, true, 'Auto', 2021);
const veh4 = new Vehiculo(300, 'Nafta', '208', 'Peugeot', 12000, true, 'Auto', 2019);
const veh6 = new Vehiculo(300, 'Nafta', 'Hilux', 'Toyota', 12000, true, 'Camioneta', 2021);
const veh5 = new Vehiculo(300, 'Nafta', 'Corolla', 'Toyota', 12000, true, 'Auto', 2021);
const veh7 = new Vehiculo(3000, 'Nafta', 'Etios', 'Toyota', 12000, true, 'Auto', 2018);
const veh8 = new Vehiculo(50000, 'Nafta', 'Cronos', 'Fiat', 6000, true, 'Auto', 2022);
exports.vehiculos = [veh1, veh2, veh3, veh4, veh5, veh6, veh7, veh8];
//# sourceMappingURL=Vehiculo.js.map