require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js');
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
            default:
                break;
        }

        guardarDB( tareas.listadoArr );

        await pausa();

    } while (opt !== '0');
    
}

main();