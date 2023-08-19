//create classes

class Gegenstand {
  bezeichner;

  constructor(bezeichner) {
    this.bezeichner = bezeichner;
  }

  getBeschreibung(){
    console.log(this.bezeichner);
  }
}

class Kugel extends Gegenstand{
  radius;
  constructor(bezeichner, radius) {
    super(bezeichner);
    this.radius = radius;
  }

  getBeschreibung() {
    console.log("Oberfläche: " + (4 * 3.1415 * this.radius * this.radius));
  }
}

let kugel = new Kugel("Kugel", 10);

kugel.getBeschreibung();
