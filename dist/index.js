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
//busca los vehiculos en la concesionaria
concesionaria.buscarVehiculo('marca', 'Toyota');
//Verificamos el stock de vehiculos de la concesionaria
console.log("Stock de la concesionaria:", concesionaria.stock);
//* Sucursal 🔽*/
//Creamos Los Vehiculos
const veh1 = new Vehiculo_1.Vehiculo(200, 'Nafta', 'Frontier', 'Nissan', 12000000, true, 'Camioneta', 2023);
const veh2 = new Vehiculo_1.Vehiculo(3200, 'Nafta', 'Hilux', 'Toyota', 12000000, true, 'Camioneta', 2022);
const veh3 = new Vehiculo_1.Vehiculo(300, 'Nafta', '3008', 'Peugeot', 12000, true, 'Auto', 2021);
const veh4 = new Vehiculo_1.Vehiculo(300, 'Nafta', '208', 'Peugeot', 12000, true, 'Auto', 2019);
const veh6 = new Vehiculo_1.Vehiculo(300, 'Nafta', 'Hilux', 'Toyota', 12000, true, 'Camioneta', 2021);
const veh5 = new Vehiculo_1.Vehiculo(300, 'Nafta', 'Corolla', 'Toyota', 12000, true, 'Auto', 2021);
const veh7 = new Vehiculo_1.Vehiculo(3000, 'Nafta', 'Etios', 'Toyota', 12000, true, 'Auto', 2018);
const veh8 = new Vehiculo_1.Vehiculo(50000, 'Nafta', 'Cronos', 'Fiat', 6000, true, 'Auto', 2022);
let sucursal1Json = fs_1.default.readFileSync(path_1.default.join(__dirname, 'sucursal1.txt'), 'utf-8');
const sucursal1Data = JSON.parse(sucursal1Json);
const sucursal1 = new Sucursal_1.Sucursal(sucursal1Data.nombre, [veh1, veh2, veh3, veh4, veh5, veh6], sucursal1Data.direccion, sucursal1Data.horarioDeAtencion);
veh1.nivelDeDesgaste();
veh2.nivelDeDesgaste();
const gerenteLeo = new Gerente_1.Gerente('Leonardo', 'Luchini', 4033321);
sucursal1.setGerente(gerenteLeo);
//busca los vehiculos en la sucursal 1
sucursal1.buscarVehiculo('categoria-nivelDeDesgaste', 'Auto', 1.5);
//Verificamos el stock de vehiculos de la sucursal 1
console.log("Stock sucursal 1:", sucursal1.stock);
//Verificamos el gerente de la sucursal 1
console.log(sucursal1.gerente);
sucursal1.generarListadoVehiculos(sucursal1.nombre);
//* Segunda Sucursal */
let sucursal2Json = fs_1.default.readFileSync(path_1.default.join(__dirname, 'sucursal2.txt'), 'utf-8');
const sucursal2Data = JSON.parse(sucursal2Json);
const sucursal2 = new Sucursal_1.Sucursal(sucursal2Data.nombre, [veh7, veh8], sucursal2Data.direccion, sucursal2Data.horarioDeAtencion);
sucursal2.setGerente(gerenteLeo);
sucursal2.generarListadoVehiculos(sucursal2.nombre);
//Verificamos el stock de vehiculos de la sucursal 2
console.log("Stock sucursal 2:", sucursal2.stock);
console.log(concesionaria.getVehiculos());
//# sourceMappingURL=index.js.map