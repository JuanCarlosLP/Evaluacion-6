import jc from './jc.js';

const ages = [2, 3, 4, 5, 6];

const print = (element, i) => {
    console.log(`La edad ${element} esta en la posicion ${i}`);
}

jc.each(ages, print)