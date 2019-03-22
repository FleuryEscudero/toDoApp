/**
 * ToDo app
 */


const argv = require ('./config/yargs').argv;
const colors = require ('colors');
const toDo = require ('./toDo/toDo');

let comando = argv._[0]


switch (comando){
    case 'crear':
       let bucket = toDo.create(argv.description); 
       console.log(`Tarea guardada: ${bucket.description}`)
    break;
    case 'listar':
    /**
     * para hacer el listado sol ocargamos el json en una variable y le hicimos un for del listado
     * tener en cuenta que los for es una variable del elemento del listado que es el archivo json en este caso
     */
        let list = toDo.getToDoList();
            console.log('===== To Do List ===='.green);
        for (let bucket of list){    
            console.log(`Bucket: ${bucket.description}`,` Estado: ${bucket.status}`.red);
        }
            console.log('=====================\n'.green);
    break;
    case 'actualizar':
        let updated = toDo.updateBucket(argv.description,argv.status);
        console.log(`se actualizo la tarea: ${updated}`)

    break;
    case 'borrar':
    let deleteBucket = toDo.deleteBucket(argv.description);
    console.log(deleteBucket);
    break;
    default:
    console.log('Comando no es reconocido');
}