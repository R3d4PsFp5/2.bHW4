let obj = receipt()


let delivery = 9000;

let Name = '';
let Price = 0;

for(let key in obj) {
    Price += obj[key]['price'];
    Name = Name + key + ' ' + obj[key]['info'] + ', ';
}

console.log(`Вы заказали ${Name} | Общая стоимость ${Price + delivery} с учетом доставки (${delivery})`);