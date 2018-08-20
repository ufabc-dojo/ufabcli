const process = require('process');
const child_process = require('child_process');

const http = require('http');
const cheerio = require('cheerio');

const ru = require('./commands/ru.js');

const printUsage = () => {
    console.log("ufabcli by ufabc.dojo");
    console.log("a ferramenta para o rato de computacao sobreviver na universidade do seculo xxi");
}

const menu = child_process.spawn('rofi', ['-i', '-dmenu', '-p', 'ufabcli', '-format', 'i']);
menu.stdin.write("ru: Restaurante Universitario - Hoje\n");
menu.stdin.write("ru: Restaurante Universitario - Semana\n");
menu.stdin.write("aulas: Aulas de Hoje\n");
menu.stdin.end();
menu.stdout.on('data', (x) => {
    if(x.toString() == 0) {
        const d = new Date().getDay();
        ru.thisWeek((list) => {
            const gambi = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            const oqTem = list[gambi[d]];
            const str = `Almoco: ${oqTem.lunch}\nJantar: ${oqTem.diner}\nVegetariano: ${oqTem.veggie}\nGuarnicao: ${oqTem.garrison}\nSalada: ${oqTem.salad}\nSobremesa: ${oqTem.dessert}`;
            const dialog = child_process.spawn('rofi', ['-e', str]);
            dialog.stdin.end();
        });
    } else if(x.toString() == 1) {
        ru.thisWeek((list) => {
            const gambi = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            const dayDialog = child_process.spawn('rofi', ['-i', '-dmenu', '-p', 'dia: ', '-format', 'i']);
            dayDialog.stdin.write(gambi.join("\n"));
            dayDialog.stdin.end();
            dayDialog.stdout.on('data', (dayBinary) => {
                const day = parseInt(dayBinary.toString());
                const oqTem = list[gambi[day]];
                const str = `Almoco: ${oqTem.lunch}\nJantar: ${oqTem.diner}\nVegetariano: ${oqTem.veggie}\nGuarnicao: ${oqTem.garrison}\nSalada: ${oqTem.salad}\nSobremesa: ${oqTem.dessert}`;
                const dialog = child_process.spawn('rofi', ['-e', str]);
                dialog.stdin.end();
            })
        });
    }
});
