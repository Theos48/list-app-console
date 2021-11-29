require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');

console.clear();

const main = async() => {
    let opt = '';
    
    do {

        opt = await inquirerMenu();
        console.log({ opt });
        // const tarea = new Tarea('Comprar placa base');
        // console.log(tarea);

        await pausa();

    } while (opt !== '0');
    
}

main();