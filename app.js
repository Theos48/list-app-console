require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer.js');
const Tareas = require('./models/tareas.js');

const main = async() => {
    let opt = '';
    const tareas = new Tareas
    const tareaDB = leerDB();

    if ( tareaDB ){
        tareas.cargarTareasFromArray( tareaDB );
    }
    do {
        //Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                // console.log( tareas.listadoArr );
                tareas.listadoCompleto();            
                break;
            case '3':
                tareas.listarPendientesCompletadas( true );
                break;
            case '4':
                tareas.listarPendientesCompletadas( false );
                break;
            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id =  await listadoTareasBorrar( tareas.listadoArr);
                if(id !== '0' ){
                    const confirmacion = await confirmar('¿Está seguro?');                    
                    if ( confirmacion ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada')
                    }   
                }
                break;
            default:
                break;
        }

        guardarDB( tareas.listadoArr );

        await pausa();

    } while (opt !== '0');
    
}

main();