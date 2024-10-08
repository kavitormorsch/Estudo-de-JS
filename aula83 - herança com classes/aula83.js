class electronicDevice {
    constructor(name){
        this.name = name;
        this.powerState = false;
    }

    powerOn(){
        if(this.powerState){
            console.log(`${this.name} is already powered on.`)
            return;
        }

        this.powerState = true;
        console.log(`${this.name} powered on.`)
    };

    powerOff(){
        if(!this.powerState){
            console.log(`${this.name} is already powered off.`)
            return;
        }

        this.powerState = false;
        console.log(`${this.name} powered off.`)
    };
    };

const ed1 = new electronicDevice("Laptop");

ed1.powerOn();
ed1.powerOff();


class Smartphone extends electronicDevice {
    constructor(name, colour, model, ram){
        super(name);
        this.colour = colour;
        this.model = model;
        this.ram = ram;
    }

}

class Tablet extends electronicDevice{
    constructor(name, wifi){
        super(name);
        this.wifi = wifi;
    }

    powerOn(){
        console.log('Overwrite');
    }
}

const s1 = new Smartphone('Xiaomi', 'Black', 'Redmi Note 11', 'ram');
console.log(s1);

const t1 = new Tablet('Xiaomi', true);
console.log(t1);
t1.powerOn();