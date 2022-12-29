import { Gerente } from "../Gerente/Gerente";


export class Sucursal {
    direccion: string;
    horarioDeAtencion: string;
    gerente: Gerente | null;


    constructor(direccion: string, horarioDeAtencion: string){
        this.direccion = direccion;
        this.horarioDeAtencion = horarioDeAtencion;
        this.gerente = null;
    }


    setGerente(gerente: Gerente) {
        this.gerente = gerente
    }
}