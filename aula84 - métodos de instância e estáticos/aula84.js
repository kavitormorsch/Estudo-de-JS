class RemoteControl {
    constructor(tvName){
        this.tvName = tvName;
        this.volume = 0;
    }

    increaseVolume(){
        if(this.volume >= 100) return;
        this.volume += 2;
    }
    decreaseVolume(){
        if(this.volume <= 0) return;
        this.volume -= 2;
    }

    static changeBattery(){
        console.log("'Ok, I'll change batteries.")
    }
}

const rc1 = new RemoteControl('Samsung G120-230');

rc1.increaseVolume();
rc1.increaseVolume();
rc1.increaseVolume();
rc1.increaseVolume();
RemoteControl.changeBattery( );
console.log(rc1);