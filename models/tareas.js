const Tarea = require('./tarea.js');



class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });


        return listado;

    }

    constructor() {
            this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    
    listadoCompleto() {
        console.log();
        this.listadoArr.forEach( (tarea, idx) => {
            const indice = `${idx + 1 }.`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            console.log(`${ indice } ${ desc } :: ${ estado }`);
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        console.log();
        let indice = 0;
        this.listadoArr.forEach( (tarea) => {            
            const {desc, completadoEn } = tarea;

            if (completadas){
                if (!completadoEn){
                    indice += 1;
                    console.log(`${ String(indice).green } ${ desc } :: ${ 'Pendiente'.red }`);
                }
            }else{
                if (completadoEn){
                    indice += 1;
                    console.log(`${ String(indice).green } ${ desc } :: ${ 'Completado'.green }`);
                }
            }
        });
    }
}


module.exports = Tareas;