require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js');
const Tareas = require('./models/tareas.js');

const main = async() => {
    let opt = '';
    const tareas = new Tareas
    
    do {
        //Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log( tareas.listadoArr);
                break;
            default:
                break;
        }




        await pausa();

    } while (opt !== '0');
    
}

main();