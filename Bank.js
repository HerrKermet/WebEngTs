var Kunde = /** @class */ (function () {
    function Kunde(arg) {
        this.name = arg;
    }
    return Kunde;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.kunden = [];
    }
    Object.defineProperty(Bank.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "getBankleitzahl", {
        get: function () {
            return this.bankleitzahl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "getKunden", {
        get: function () {
            return this.kunden;
        },
        enumerable: false,
        configurable: true
    });
    Bank.prototype.addKunde = function (arg) {
        this.kunden.push(arg);
    };
    Bank.prototype.printKunden = function () {
        console.log(this.kunden);
    };
    return Bank;
}());
var bank = new Bank();
var kunde1 = new Kunde("Herbert");
var kunde2 = new Kunde("Marvin");
bank.bankleitzahl = 42069;
bank.name = "Sparkasse";
bank.addKunde(kunde1);
bank.printKunden();
bank.addKunde(kunde2);
bank.printKunden();
