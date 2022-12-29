"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
class Sucursal {
    constructor(direccion, horarioDeAtencion) {
        this.direccion = direccion;
        this.horarioDeAtencion = horarioDeAtencion;
        this.gerente = null;
    }
    setGerente(gerente) {
        this.gerente = gerente;
    }
}
exports.Sucursal = Sucursal;
//# sourceMappingURL=Sucursal.js.map