//create classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gegenstand = /** @class */ (function () {
    function Gegenstand(bezeichner) {
        this.bezeichner = bezeichner;
    }
    Gegenstand.prototype.getBeschreibung = function () {
        console.log(this.bezeichner);
    };
    return Gegenstand;
}());
var Kugel = /** @class */ (function (_super) {
    __extends(Kugel, _super);
    function Kugel(bezeichner, radius) {
        var _this = _super.call(this, bezeichner) || this;
        _this.radius = radius;
        return _this;
    }
    Kugel.prototype.getBeschreibung = function () {
        console.log("Oberfläche: " + (4 * 3.1415 * this.radius * this.radius));
    };
    return Kugel;
}(Gegenstand));
var kugel = new Kugel("Kugel", 10);
kugel.getBeschreibung();
