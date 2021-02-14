// 1 užduotis:
document.write('1 užduotis: <br>');
let vardas = 'Dominykas';
let Amzius = 22;
let Hobis = 'Trimate_spauda';

console.log(`Mano vardas ${vardas}, man ${Amzius}. Mano hobis yra ${Hobis}.`);
document.write('Mano vardas '+ vardas +' man '+ Amzius +'. mano hobis yra '+ Hobis +'.<br>');

// 2 uzduotis:
document.write('<br> 2 užduotis: <br>');
let gim_met = 1998;
let ateties_met = 2050;

met_sum = ateties_met - gim_met;
newsum = met_sum - 1;
console.log(`${ateties_met} metais man bus ${met_sum} arba ${met_sum-1} metai.`);
document.write(ateties_met+' metais man bus '+ met_sum +' arba '+ newsum +' metai.<br>');

// 3 uzduotis:
document.write('<br> 3 užduotis: <br>');
let skersmuo = 14;
let spidulys = 14 / 2;
let plotas = 2 * 3.14 * spidulys;

console.log(`Apskritimo kurio skersmuo yra: ${skersmuo} cm, plotas yra: ${plotas} cm.`);
document.write('Apskritimo kurio skersmuo yra: '+ skersmuo +' cm, plotas yra: '+ plotas +' cm.<br>');

// 4 uzduotis:
document.write('<br> 4 užduotis: <br>');
let cels = 23;
let far = cels * 1.8000 + 32.00;

console.log(`${cels} °C yra ${far} °F`);
document.write(cels+' °C yra '+ far +' °F.<br>');

// 5 uzduotis:
let sak = 'Mes kalbame mažai, jeigu nekalbame apie save.';
const ilg = sak.length;
console.log(ilg);
console.log(sak.toUpperCase());
console.log(sak.slice(0, 35));
const lang = sak.split(' ');
console.log(lang);
console.log(sak.search('mažai'));
console.log(sak.replace('kalbame', 'šnekame'));

// 6 uzduotis:
let pas = 'laBa8s rYta56s, lIEtuva';
pakSak = pas.replace(/[0-9]/g, ''); 
console.log(pakSak.toLowerCase().replace(/l/g, "L"));

// 7 uzduotis:
const numb = [1,2,3,4,5,6,7,8,9,10];
console.log(numb);
var istrintasElementas = numb.shift(); // pirmo elemento istrinimas
var istrintaspaskElementas = numb.pop(); // paskutinio elemento istrinimas
console.log(numb);
numb[6] = 'Mauglis'; // 6 elemento keitimas
console.log(numb);
const papildymas = [6,12,25,32];
console.log(papildymas);
const newarr = numb.concat(papildymas); //abeju masyvu sudejimas
console.log(newarr);
const strg = newarr.join(', '); //masyvas konvertuojamas i string ir atskiriamas kableliais.
console.log(strg);

//8 uzduotis:

const mokinys = [
    {
        vardas: 'Martynas',
        pavardė: 'Lubys',
        amžius: 17,
        markAvg: 4.5,
        stipendija: false
    },
    {
        vardas: 'Alina',
        pavardė: 'Alijeva',
        amžius: 16,
        markAvg: 9,
        stipendija: true  
    },
    {
        vardas: 'Kazimieras',
        pavarde: 'Bakštys',
        amzius: 17,
        markAvg: 9.3,
        stipendija: true
    },
    {
        vardas: 'Algimantas',
        pavarde: 'Peraitis',
        amzius: 16,
        markAvg: 6.5,
        stipendija: true
    },
    {
        vardas: 'Kotryna',
        pavarde: 'Petraitytė',
        amzius: 16,
        markAvg: 4,
        stipendija: false
    }
];
console.log(mokinys);

// 8 Uzduotis:

console.log(mokinys[1].amžius); // alina yra 1 elementas objekte, tuot tarpu martinas yra 0. Antras sakinys nurodo rekiamos info sitraukima.
console.log(mokinys[3].markAvg); // algimantas yra 3 elementas.
console.log(mokinys[0]);// martinas 0 ojekto elementas

