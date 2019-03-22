/**
 * 
 */


const argv = require ('./config/yargs').argv;

let comando = argv._[0]


switch (comando){
    case 'crear':
        console.log(`Crear por hacer ${argv.descripcion}`);
    break;
    case 'listar':
        console.log(`Mostrar todas las tareas por hacer`);
    break;
    case 'actualizar':
        console.log(`Actualizada la tarea por hacer ${argv.descripcion} con el status ${argv.status}`);
    break;
    default:
    console.log('Comando no es reconocido');
}