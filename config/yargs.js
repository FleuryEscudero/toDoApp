/**
 * Configuración del yargs
 */

const opts = { descripcion: { demand: true, alias: 'd'}, 
               status: { alias: 's', default: true}
};

const argv = require ('yargs')
.command('crear', 'Crea una tarea por hacer', {descripcion: {alias: 'd', demand: true}})
.command('actualizar', 'Actualiza el status de una tarea', opts)
.help ()
.argv;


module.exports ={
    argv
}