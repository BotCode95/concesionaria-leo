"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Concesionaria_1 = require("./src/clases/Concesionaria/Concesionaria");
const Gerente_1 = require("./src/clases/Gerente/Gerente");
const Sucursal_1 = require("./src/clases/Sucursal/Sucursal");
const Vehiculo_1 = require("./src/clases/Vehiculo/Vehiculo");
//Iniciamos la Concesionaria
const concesionaria = new Concesionaria_1.Concesionaria('Tdf-Car', 0);
//Creamos Los Vehiculos
const vehiculo1 = new Vehiculo_1.Vehiculo(200, 'Nafta', 'Frontier', 'Nissan', 12000000, true, 'Camioneta', 2023);
const vehiculo2 = new Vehiculo_1.Vehiculo(3200, 'Nafta', 'Hilux', 'Toyota', 12000000, true, 'Camioneta', 2022);
//Obtiene el valor de desgaste del vehiculo y lo almacena en la variable nivelDesgaste
vehiculo1.nivelDeDesgaste();
vehiculo2.nivelDeDesgaste();
//Vehiculos agregados a la concesionaria
concesionaria.agregarVehiculo(vehiculo1);
concesionaria.agregarVehiculo(vehiculo2);
//Muestra los vehiculos
concesionaria.getVehiculos();
//busca los vehiculos en la concesionaria
concesionaria.buscarVehiculo('marca', 'Toyota');
//Verificamos el stock de vehiculos de la concesionaria
console.log("Stock de la concesionaria:", concesionaria.stock);
//* Sucursal 🔽*/
const sucursal1 = new Sucursal_1.Sucursal('Sucursal 1', 0, 'aaaa', '9 a 18hs');
const vehiculo1Sucursal = new Vehiculo_1.Vehiculo(300, 'Nafta', '3008', 'Peugeot', 12000, true, 'Auto', 2021);
const vehiculo2Sucursal1 = new Vehiculo_1.Vehiculo(300, 'Nafta', '208', 'Peugeot', 12000, true, 'Auto', 2019);
const vehiculo3Sucursal1 = new Vehiculo_1.Vehiculo(300, 'Nafta', 'Corolla', 'Toyota', 12000, true, 'Auto', 2021);
const vehiculo4Sucursal1 = new Vehiculo_1.Vehiculo(300, 'Nafta', 'Hilux', 'Toyota', 12000, true, 'Camioneta', 2021);
sucursal1.agregarVehiculo(vehiculo1Sucursal);
sucursal1.agregarVehiculo(vehiculo2Sucursal1);
sucursal1.agregarVehiculo(vehiculo3Sucursal1);
sucursal1.agregarVehiculo(vehiculo4Sucursal1);
vehiculo1Sucursal.nivelDeDesgaste();
vehiculo2Sucursal1.nivelDeDesgaste();
const gerenteLeo = new Gerente_1.Gerente('Leonardo', 'Luchini', 4033321);
sucursal1.setGerente(gerenteLeo);
//busca los vehiculos en la sucursal 1
sucursal1.buscarVehiculo('categoria-nivelDeDesgaste', 'Auto', 1.5);
//Verificamos el stock de vehiculos de la sucursal 1
console.log("Stock sucursal", sucursal1.stock);
//Verificamos el gerente de la sucursal 1
console.log(sucursal1.gerente);
sucursal1.generarListadoVehiculos(sucursal1.nombre);
//* Segunda Sucursal */
const sucursal2 = new Sucursal_1.Sucursal('Sucursal 2', 0, 'aaaa', '9 a 18hs');
sucursal2.setGerente(gerenteLeo);
const vehiculo1Sucursal2 = new Vehiculo_1.Vehiculo(3000, 'Nafta', 'Etios', 'Toyota', 12000, true, 'Auto', 2018);
const vehiculo2Sucursal2 = new Vehiculo_1.Vehiculo(50000, 'Nafta', 'Cronos', 'Fiat', 6000, true, 'Auto', 2022);
sucursal2.agregarVehiculo(vehiculo1Sucursal2);
sucursal2.agregarVehiculo(vehiculo2Sucursal2);
sucursal2.generarListadoVehiculos(sucursal2.nombre);
//# sourceMappingURL=index.js.map