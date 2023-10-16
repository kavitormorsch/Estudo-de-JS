const name = 'Kauê';
let control =  0;

while (control < name.length) {
    console.log(name[control]);
    control++
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);

}

let rand = random(0, 50);

while (rand !== 10) {
    rand = random(0, 50);
    console.log(rand);
};

do {
    rand = random(0, 50);
    console.log(rand);
}while (rand !== 10)

