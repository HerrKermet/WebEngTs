/*class Speiseplan{
  static speisen = [];
  static list;
  static prefix;

  static addMeal(arg){
    //could be done with find but it doesnt work somehow
    for(var meal in this.speisen){
      if(meal == arg){
        alert(arg + " is already added");
        return;
      }
    }
    this.speisen.push(arg);
    Speiseplan.update();
  }

  static removeMeal(arg){
    this.speisen = this.speisen.filter(x => x != arg);
    this.update()
  }

  static update(){

    this.list = document.querySelector("table");
    var entries = ``;
    for(var meal in this.speisen){
      entries += `<tr><td>${meal}</td></tr>`;
    }
    console.log("current meals are: " + entries);
    Speiseplan.list.innerHTML = this.prefix + entries;
  }

}

var buttonAdd = document.getElementById("hinzufuegen");
var buttonRemove = document.getElementById("entfernen");

Speiseplan.prefix = document.querySelector("table").innerHTML;
buttonAdd.addEventListener("click", function (){
  let input = document.querySelector("input");
  let arg = input.value;
  Speiseplan.addMeal(arg);
  console.log(`added ${arg} to plan`);
  Speiseplan.update();
}, false);

buttonRemove.addEventListener("click", function (){
  let input = document.querySelector("input");
  let arg = input.value;
  Speiseplan.removeMeal(arg);
  console.log(`removed ${arg} from plan`);
  Speiseplan.update();
}, false);

*/
var Speiseplan = /** @class */ (function () {
    function Speiseplan() {
    }
    Speiseplan.addItem = function (item) {
        if (Speiseplan.isInMenu(item)) {
            alert("Speise ist bereits im Menü");
        }
        else {
            Speiseplan.menu.push(item);
        }
    };
    Speiseplan.removeItem = function (item) {
        if (Speiseplan.isInMenu(item)) {
            Speiseplan.menu.splice(Speiseplan.menu.indexOf(item), 1);
        }
        else {
            alert("Speise ist nicht im Menü");
        }
    };
    Speiseplan.isInMenu = function (item) {
        var result = Speiseplan.menu.indexOf(item);
        if (result != -1)
            return true;
        return false;
    };
    Speiseplan.printMenu = function () {
        var speiseListe = document.querySelector('#Speiseplan');
        speiseListe.textContent = '';
        for (var item in Speiseplan.menu) {
            speiseListe.textContent += Speiseplan.menu[item] + ', ';
        }
    };
    Speiseplan.menu = [];
    return Speiseplan;
}());
var speiseEingabe = document.querySelector('input');
var hinzufuegen = document.querySelector('#hinzufuegen');
var entfernen = document.querySelector('#entfernen');
hinzufuegen.addEventListener('click', function () {
    var item = speiseEingabe.value;
    Speiseplan.addItem(item);
    Speiseplan.printMenu();
});
entfernen.addEventListener('click', function () {
    var item = speiseEingabe.value;
    Speiseplan.removeItem(item);
    Speiseplan.printMenu();
});
