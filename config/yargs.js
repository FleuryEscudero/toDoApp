/**
 * Configuración del yargs
 */

const opts = { description: { demand: true, alias: 'd'}, 
               status: { alias: 's', default: true}
};

const argv = require ('yargs')
    .command('crear', 'Crea una tarea por hacer', {description: {alias: 'd', demand: true}})
    .command('actualizar', 'Actualiza el status de una tarea', opts)
    .command('listar', 'Listar las tareas por hacer')
    .command('borrar', 'Borrar tareas',{description: {alias: 'd', demand: true}})
    .help ()
    .argv;


module.exports ={
    argv
}