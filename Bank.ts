class Kunde {
  name: string;
  constructor(arg) {
    this.name = arg;
  }
}

class Bank {
  name;
  bankleitzahl;
  kunden;

  constructor() {
    this.kunden = [];
  }

  get getName(){
    return this.name;
  }

  get getBankleitzahl(){
    return this.bankleitzahl;
  }

  get getKunden(){
    return this.kunden;
  }

  addKunde(arg){
    this.kunden.push(arg);
  }
  printKunden(){
    console.log(this.kunden);
  }
}

let bank = new Bank();
let kunde1 = new Kunde("Herbert");
let kunde2 = new Kunde("Marvin");

bank.bankleitzahl = 42069;
bank.name = "Sparkasse";
bank.addKunde(kunde1);
bank.printKunden();
bank.addKunde(kunde2);
bank.printKunden();
