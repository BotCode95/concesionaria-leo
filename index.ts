import path from "path";
import { Concesionaria } from "./src/clases/Concesionaria/Concesionaria"
import { Gerente } from "./src/clases/Gerente/Gerente"
import { Sucursal } from "./src/clases/Sucursal/Sucursal"
import { Vehiculo, vehiculos} from "./src/clases/Vehiculo/Vehiculo"
import fs from 'fs';


//Iniciamos la Concesionaria
const concesionaria = new Concesionaria('Tdf-Car',vehiculos)
//Muestra los vehiculos
concesionaria.getVehiculos()

//busca los vehiculos en la concesionaria
concesionaria.buscarVehiculo('marca', 'Toyota')

//Verificamos el stock de vehiculos de la concesionaria
console.log("Stock de la concesionaria:", concesionaria.stock)

//* Sucursal 🔽*/
//Creamos Los Vehiculos
const veh1 = new Vehiculo(200, 'Nafta','Frontier', 'Nissan', 12000000, true, 'Camioneta', 2023)
const veh2 = new Vehiculo(3200, 'Nafta','Hilux', 'Toyota', 12000000, true, 'Camioneta', 2022)
const veh3 = new Vehiculo(300, 'Nafta', '3008', 'Peugeot',12000, true, 'Auto', 2021)
const veh4 = new Vehiculo(300, 'Nafta', '208', 'Peugeot',12000, true, 'Auto', 2019)
const veh6 = new Vehiculo(300, 'Nafta', 'Hilux', 'Toyota',12000, true, 'Camioneta', 2021)
const veh5 = new Vehiculo(300, 'Nafta', 'Corolla', 'Toyota',12000, true, 'Auto', 2021)
const veh7 = new Vehiculo(3000, 'Nafta', 'Etios', 'Toyota',12000, true, 'Auto', 2018)
const veh8 = new Vehiculo(50000, 'Nafta', 'Cronos', 'Fiat',6000, true, 'Auto', 2022)

let sucursal1Json: string = fs.readFileSync(path.join(__dirname, 'sucursal1.txt'), 'utf-8')
const sucursal1Data= JSON.parse(sucursal1Json)

const sucursal1 = new Sucursal(sucursal1Data.nombre, [veh1,veh2, veh3, veh4,veh5, veh6],sucursal1Data.direccion, sucursal1Data.horarioDeAtencion)

veh1.nivelDeDesgaste()
veh2.nivelDeDesgaste()

const gerenteLeo = new Gerente('Leonardo', 'Luchini', 4033321)

sucursal1.setGerente(gerenteLeo)
//busca los vehiculos en la sucursal 1
sucursal1.buscarVehiculo('categoria-nivelDeDesgaste', 'Auto', 1.5)
//Verificamos el stock de vehiculos de la sucursal 1
console.log("Stock sucursal 1:", sucursal1.stock)
//Verificamos el gerente de la sucursal 1
console.log(sucursal1.gerente)
sucursal1.generarListadoVehiculos(sucursal1.nombre)

//* Segunda Sucursal */
let sucursal2Json: string = fs.readFileSync(path.join(__dirname, 'sucursal2.txt'), 'utf-8')
const sucursal2Data= JSON.parse(sucursal2Json)
const sucursal2 = new Sucursal(sucursal2Data.nombre, [veh7, veh8], sucursal2Data.direccion, sucursal2Data.horarioDeAtencion)

sucursal2.setGerente(gerenteLeo)

sucursal2.generarListadoVehiculos(sucursal2.nombre)

//Verificamos el stock de vehiculos de la sucursal 2
console.log("Stock sucursal 2:", sucursal2.stock)

console.log(concesionaria.getVehiculos())
