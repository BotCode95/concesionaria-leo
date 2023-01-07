import { CategoriaVehiculo, TipoCombustible } from "../../types/vehiculo";


export class Vehiculo {
    private kilometraje: number;
    tipoDeCombustible: TipoCombustible;
    modelo: string
    marca: string
    precio: number
    serviceAlDia: boolean
    categoria: CategoriaVehiculo
    anio : number;
    nivelDesgaste: number


    constructor(kilometraje: number, tipoDeCombustible: TipoCombustible, modelo: string, marca: string, precio: number, serviceAlDia: boolean, tipocategoria: CategoriaVehiculo, anio: number) {
        this.kilometraje = kilometraje;
        this.tipoDeCombustible =tipoDeCombustible;
        this.modelo = modelo;
        this.marca= marca;
        this.precio = precio;
        this.serviceAlDia = serviceAlDia;
        this.categoria= tipocategoria;
        this.anio = anio;
        this.nivelDesgaste = 0
    }


    nivelDeDesgaste() {
        const antiguedad = this.calcularAntiguedad()
        if(this.categoria === 'Camioneta'){
            if(this.tipoDeCombustible === 'Diesel'){
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 1000
            }else {
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 100
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste)
        }
        else if (this.categoria === 'Motocicleta'){
            if(this.serviceAlDia && this.kilometraje < 30000 ){
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 1000
            }else {
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 10
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste)

        }else {
            if(this.serviceAlDia){
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 100
            }else {
                this.nivelDesgaste = (this.kilometraje / antiguedad ) / 10
            }
            console.log('Nivel de desgaste del auto', this.nivelDesgaste)
        }

    }


    calcularAntiguedad() : number {
        const anioActual = new Date().getFullYear()

        if(anioActual === this.anio) {
            return 1
        }
        return anioActual - this.anio
    }
}



// const auto = new Vehiculo(10000, 'Nafta', 'Corolla', 'Toyota', 6000000, false, 'Auto', 2010)

// auto.nivelDeDesgaste()
// console.log(auto)