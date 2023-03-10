"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Concesionaria_1 = require("./src/clases/Concesionaria/Concesionaria");
const Gerente_1 = require("./src/clases/Gerente/Gerente");
const Sucursal_1 = require("./src/clases/Sucursal/Sucursal");
const Vehiculo_1 = require("./src/clases/Vehiculo/Vehiculo");
const fs_1 = __importDefault(require("fs"));
//Iniciamos la Concesionaria
const concesionaria = new Concesionaria_1.Concesionaria('Tdf-Car', Vehiculo_1.vehiculos);
//Muestra los vehiculos
concesionaria.getVehiculos();
//Creamos Los Vehiculos - Desestructuración de array -desectructuring array
const [veh1, veh2, veh3, veh4, veh5, veh6, veh7, veh8] = Vehiculo_1.vehiculos;
//* Sucursales 🔽*/
//Leemos el Txt con el json de datos
let sucursal1Json = fs_1.default.readFileSync(path_1.default.join(__dirname, 'sucursal1.txt'), 'utf-8');
//parseamos el objeto json a un objeto que entienda JS | TS
const sucursal1Data = JSON.parse(sucursal1Json);
const sucursal1 = new Sucursal_1.Sucursal(sucursal1Data.nombre, [veh1, veh2, veh3, veh4, veh5, veh6], sucursal1Data.direccion, sucursal1Data.horarioDeAtencion);
//* Segunda Sucursal */
let sucursal2Json = fs_1.default.readFileSync(path_1.default.join(__dirname, 'sucursal2.txt'), 'utf-8');
const sucursal2Data = JSON.parse(sucursal2Json);
const sucursal2 = new Sucursal_1.Sucursal(sucursal2Data.nombre, [veh7, veh8], sucursal2Data.direccion, sucursal2Data.horarioDeAtencion);
const gerenteLeo = new Gerente_1.Gerente('Leonardo', 'Luchini', 4033321);
const gerenteJuan = new Gerente_1.Gerente('Juan', 'Luchini', 45863112);
sucursal1.setGerente(gerenteLeo);
sucursal2.setGerente(gerenteJuan);
console.log(sucursal1.gerente);
console.log(sucursal2.gerente);
//busca los vehiculos en la concesionaria
concesionaria.buscarVehiculo('Concesionaria', 'marca', 'Toyota');
//busca los vehiculos en la sucursal 1
sucursal1.buscarVehiculo(sucursal1.nombre, 'categoria-nivelDeDesgaste', 'Auto', 1.5);
//busca los vehiculos en la sucursal 2
sucursal2.buscarVehiculo(sucursal2.nombre, 'modelo', 'Cronos', 1.5);
//Verificamos el stock de vehiculos
console.log("Stock de la concesionaria:", concesionaria.stock);
console.log("Stock sucursal 1:", sucursal1.stock);
console.log("Stock sucursal 2:", sucursal2.stock);
//Mostramos todos los vehiculos
console.log("Vehiculos Concesionaria:", concesionaria.getVehiculos());
sucursal2.generarListadoVehiculos(sucursal2.nombre);
sucursal1.generarListadoVehiculos(sucursal1.nombre);
//# sourceMappingURL=index.js.map