/**
 * Creación de archivo y tarea persistente 
 * Logica del programa
 */


 const fs = require('fs');
 
 let toDoList = [];

  saveDB = async ( ) => {
    let data = JSON.stringify(toDoList)
        if (!data){
            throw new Error (`${data} no es valida`)
        }else {
            fs.writeFile('./db/data.json', data, (err) => {
                if (err) 
                    throw err;        
                });
                
        }
        

 }

  loadDB = async ( ) => {
     /**
      * Resulta que JS hace todo por nosotros y al ser un archivo json solo hay que cargarlo dentro de una variable y listo.
      * Para hacer un arreglo vacio valido agregamos un try catch donde intentamos primero cargar el archivo si tiene error entonces generamos
      * un arreglo vacio para poder generar un json valido y no mande error.
      */
     
    try { 
        toDoList = require ('../db/data.json');    
    }catch (e){
        toDoList = []; 
    }
    
     
 }

  create = (description) => {

    /**
     * Para ir agregando tarea por tarea lo unico que hicimos fue primero cargar el archivo dentro de la variable, lo mandamos en la funcion y 
     * entonces la lista ya tiene el primero objeto y no sobreescribe si no que ahora si hace la funcion push correctamente y guarda el segundo 
     * objeto dentro de arreglo que esta en el archivo
     */

    loadDB();

     let toDo = {
         description,
         status: false
     };

     /**
      * Aqui utilizamos el prototype push apra agregar un nuevo pbjeto al arreglo en este caso a toDoList con el objeto toDo
      */

     toDoList.push(toDo);

     /**
      * yo habia puesto la funcion dentro del Case del archivo apps, pero la pusimos despues de hacer el push puesto que el objeto del arreglo esta llamado dentro
      * del stringify y se tiene en memoria entonces se gaurda y podemos llevar a acabo la tarea de gaurdado despues de tomar la informacion.
      */
     saveDB();
     return toDo;
 }

  getToDoList = () => {
      loadDB();

      return toDoList;
  }
  
updateBucket = (description, status) => {
    loadDB();

    /**
     * vamos a crear un indice para identificar la tarea que vamos a actualizar utilizamos una propiedad de los arreglos que se llama
     * findIndex que nos permite buscar por indice dentro del arreglo y asi asignar el numero de indice a la variable que creamos.
     * esto regresa una funcion de callback que nos permite ir recorriendo el arreglo y asi obtener el numero de indice del elemento buscado
     */

    let index = toDoList.findIndex( bucket => bucket.description === description )
    if (index >=0 ){

        /**
         * vamos a asignar el indice dentro del arreglo y vamos a actualizar el status de acuerdo al argumetno enviado dentro de la consola.
         */

        toDoList[index].status=status ;

        /**
         * guardamos en la base de datos el resultado
         */

        saveDB();
        return true
    } else {
        return false;
    }
    
}

deleteBucket = (description) => {
    loadDB();
    let index = toDoList.findIndex( bucket => bucket.description === description )
    if (index >=0 ){
        toDoList.splice(index);
        saveDB();
        console.log('Elemento Borrado');
        return true
    }else {
        return false;
    }
}


 module.exports = {
     create,
     getToDoList,
     updateBucket,
     deleteBucket
 }